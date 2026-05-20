// deepseek.service.ts
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AiService {
  private readonly apiKey: any;

  constructor(private configService: ConfigService) {
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
          messages: [{ role: "user", content: prompt }],
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
}
