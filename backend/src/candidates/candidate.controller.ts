import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CandidatesService } from "./candidate.service";
import { CreateCandidateDto } from "./dto/create-candidate.dto";

@Controller("candidates")
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

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
}
