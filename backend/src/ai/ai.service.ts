import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AiEntity } from "entities/ai.entity";
import { AnalyzeDto } from "./dto/ai-analyze.dto";
import { CandidatesEntity } from "entities/candidates.entity";
import { SettingsEntity } from "entities/ai-settings.entity";
import { error } from "console";
import { CandidateProfEntity } from "entities/candidate-profile.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CandidateProfDto } from "dto/candidate-prof.dto";

@Injectable()
export class AiService {
  private readonly apiKey: any;

  constructor(
    private configService: ConfigService,
    @InjectRepository(CandidateProfEntity)
    private readonly candidateProfRepository: Repository<CandidateProfEntity>,
    @InjectRepository(CandidatesEntity)
    private readonly candidatesRepository: Repository<CandidatesEntity>,
  ) {
    this.apiKey = this.configService.get<string>("DEEPSEEK_API_KEY");
  }

  async askAboutCandidate(prompt: string): Promise<string> {
    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      throw new HttpException(
        `DeepSeek API Error: ${response.status}`,
        HttpStatus.BAD_GATEWAY,
      );
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }
  async AnalyzeCandidate(can_id: number) {
    const candidatesInfo: any = await this.candidatesRepository.findOneBy({
      id: can_id,
    });

    const profInfo = await this.candidateProfRepository.findOneBy({
      candidate_id: can_id,
    });

    const settings: any = await SettingsEntity.findOneBy({
      is_active: true,
    });

    const candidates: any = await CandidatesEntity.findOneBy({
      id: can_id,
    });

    const [summaryText, fitAssessment, riskAssessment, recommendationText] =
      await Promise.all([
        this.askAboutCandidate(
          "Напиши короткую сводку по кандидату. Без лишних слов и очень коротко. Его данные: Имя:" +
            candidatesInfo.full_name +
            "Дата рождения:" +
            candidatesInfo.birth_date +
            "Город:" +
            candidatesInfo.city +
            "Стаж работы:" +
            profInfo?.experience_years +
            "Категория прав:" +
            profInfo?.license_category +
            "Выбранная формат работы:" +
            profInfo?.work_schedule_preference,
        ),
        this.askAboutCandidate(
          "Оцени соответствие кандидата вакансии. Без лишних слов и очень коротко. Его данные: Имя:" +
            candidatesInfo.full_name +
            "Дата рождения:" +
            candidatesInfo.birth_date +
            "Город:" +
            candidatesInfo.city +
            "Стаж работы:" +
            profInfo?.experience_years +
            "Категория прав:" +
            profInfo?.license_category +
            "Выбранная формат работы:" +
            profInfo?.work_schedule_preference,
        ),
        this.askAboutCandidate(
          "Кратко опиши риски при найме этого кандидата на эту вакансию. Без лишних слов и очень коротко. Его данные: Имя:" +
            candidatesInfo.full_name +
            "Дата рождения:" +
            candidatesInfo.birth_date +
            "Город:" +
            candidatesInfo.city +
            "Стаж работы:" +
            profInfo?.experience_years +
            "Категория прав:" +
            profInfo?.license_category +
            "Выбранная формат работы:" +
            profInfo?.work_schedule_preference,
        ),
        this.askAboutCandidate(
          "Напиши рекомендации для HR по кандидату. Без лишних слов и очень коротко. Его данные: Имя:" +
            candidatesInfo.full_name +
            "Дата рождения:" +
            candidatesInfo.birth_date +
            "Город:" +
            candidatesInfo.city +
            "Стаж работы:" +
            profInfo?.experience_years +
            "Категория прав:" +
            profInfo?.license_category +
            "Выбранная формат работы:" +
            profInfo?.work_schedule_preference,
        ),
      ]);
    await AiEntity.update(
      { candidate_id: candidates.id },
      {
        summary_text: summaryText,
        fit_assessment: fitAssessment,
        risk_assessment: riskAssessment,
        recommendation_text: recommendationText,
        provider_code: settings.provider_code,
        model_name: settings.model_name,
      },
    );

    await CandidateProfEntity.update(
      { candidate_id: candidates.id },
      { ai_summary: summaryText, hr_recommendation: recommendationText },
    );

    const resAnalyze = await AiEntity.findOneBy({
      candidate_id: candidates.id,
    });
    const resProfile = await CandidateProfEntity.findOneBy({
      candidate_id: candidates.id,
    });
    return {
      analyze: new AnalyzeDto(resAnalyze!),
      profile: new CandidateProfDto(resProfile!),
    };
  }
}
