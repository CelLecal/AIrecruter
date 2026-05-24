import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CandidatesService } from "./candidate.service";
import { CreateCandidateDto } from "../dto/create-candidate.dto";
import { AiService } from "ai/ai.service";

@Controller("candidates")
export class CandidatesController {
  constructor(
    private readonly candidatesService: CandidatesService,
    private readonly aiService: AiService,
  ) {}

  @Post()
  create(@Body() data: CreateCandidateDto) {
    return this.candidatesService.create(data);
  }
  @Get()
  getList() {
    return this.candidatesService.getList();
  }
  @Get(":id")
  async getCandidateById(@Param("id") id: string) {
    const candidateId = parseInt(id);
    const candidate =
      await this.candidatesService.findCandidateById(candidateId);
    if (!candidate) {
      return { message: "Пользователь не найден" };
    }
    return candidate;
  }
  @Get(":id/ai-result")
  lastResult() {
    return this.candidatesService.lastResult();
  }

  @Post(":id/analyze-ai")
  async ask(@Param("id") id: number) {
    const response = await this.aiService.AnalyzeCandidate(id);
    return { response };
  }
}
