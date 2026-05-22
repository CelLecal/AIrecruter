import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AiEntity } from "entities/ai.entity";
import { CreateAnalyzeDto } from "./dto/create-ai-analyze.dto";
import { AnalyzeDto } from "./dto/ai-analyze.dto";
import { CandidatesEntity } from "entities/candidates.entity";
import { SettingsEntity } from "entities/ai-settings.entity";
import { error } from "console";
import { CandidateProfEntity } from "entities/candidate-profile.entity";
import { CandidateDocsEntity } from "entities/candidate-documents.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AiService {
  private readonly apiKey: any;

  constructor(
    private configService: ConfigService,
    @InjectRepository(CandidateDocsEntity)
    private readonly candidateDocsRepository: Repository<CandidateDocsEntity>,
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
    const candidatesInfo = await this.candidatesRepository.findOneBy({
      id: can_id,
    });
    if (!candidatesInfo) {
      throw error;
    }
    const docsInfo = await this.candidateDocsRepository.findOneBy({
      candidate_id: candidatesInfo.id,
    });
    const profInfo = await this.candidateProfRepository.findOneBy({
      candidate_id: candidatesInfo.id,
    });
    const analyze = new AiEntity();
    const settings = await SettingsEntity.findOne({
      where: {
        is_active: true,
      },
    });
    if (!settings) {
      throw error;
    }

    const candidates = await CandidatesEntity.findOne({
      where: {
        id: can_id,
      },
    });
    if (!candidates) {
      throw error;
    }

    const [summaryText, fitAssessment, riskAssessment, recommendationText] =
      await Promise.all([
        this.askAboutCandidate(
          "Напиши короткую сводку по кандидату. Его данные: Имя:" +
            candidatesInfo.full_name +
            "Дата рождения:" +
            candidatesInfo.birth_date +
            "Город:" +
            candidatesInfo.city +
            "Стаж работы:" +
            profInfo?.experience_years +
            "Категория прав:" +
            profInfo?.license_category +
            "Выбранная вакансия:" +
            profInfo?.work_schedule_preference,
        ),
        this.askAboutCandidate(
          "Оцени соответствие кандидата вакансии. Его данные: Имя:" +
            candidatesInfo.full_name +
            "Дата рождения:" +
            candidatesInfo.birth_date +
            "Город:" +
            candidatesInfo.city +
            "Стаж работы:" +
            profInfo?.experience_years +
            "Категория прав:" +
            profInfo?.license_category +
            "Выбранная вакансия:" +
            profInfo?.work_schedule_preference,
        ),
        this.askAboutCandidate(
          "Кратко опиши риски при найме этого кандидата на эту вакансию. Его данные: Имя:" +
            candidatesInfo.full_name +
            "Дата рождения:" +
            candidatesInfo.birth_date +
            "Город:" +
            candidatesInfo.city +
            "Стаж работы:" +
            profInfo?.experience_years +
            "Категория прав:" +
            profInfo?.license_category +
            "Выбранная вакансия:" +
            profInfo?.work_schedule_preference,
        ),
        this.askAboutCandidate(
          "Напиши рекомендации для HR по кандидату. Его данные: Имя:" +
            candidatesInfo.full_name +
            "Дата рождения:" +
            candidatesInfo.birth_date +
            "Город:" +
            candidatesInfo.city +
            "Стаж работы:" +
            profInfo?.experience_years +
            "Категория прав:" +
            profInfo?.license_category +
            "Выбранная вакансия:" +
            profInfo?.work_schedule_preference,
        ),
      ]);

    analyze.candidate_id = candidates.id;
    analyze.summary_text = summaryText;
    analyze.fit_assessment = fitAssessment;
    analyze.risk_assessment = riskAssessment;
    analyze.recommendation_text = recommendationText;
    analyze.provider_code = settings.provider_code;
    analyze.model_name = settings.model_name;

    const res = await analyze.save();
    return new AnalyzeDto(res);
  }
}
