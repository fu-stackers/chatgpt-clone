import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private readonly client: GoogleGenAI;
  private readonly model: string;

  constructor(private readonly config: ConfigService) {
    this.client = new GoogleGenAI({
      apiKey: this.config.getOrThrow<string>('GEMINI_API_KEY'),
    });
    this.model = this.config.getOrThrow<string>('GEMINI_MODEL');
  }

  async ask(prompt: string) {
    try {
      const response = await this.client.models.generateContent({
        model: this.model,
        contents: prompt,
      });
      return {
        text: response.text ?? '',
        totalTokens: response.usageMetadata?.totalTokenCount ?? 0,
      };
    } catch (error) {
      this.logger.error('Gemini request failed', error);
      throw new BadGatewayException('The AI service failed to answer');
    }
  }
}
