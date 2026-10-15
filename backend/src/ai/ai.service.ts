import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';

export type ChatTurn = {
  role: 'user' | 'model';
  text: string;
};

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
  ask(prompt:string){
    return this.chat([{role:'user',text:prompt}]);
  }

  async chat(history:ChatTurn[]) {
    try {
      const response = await this.client.models.generateContent({
        model: this.model,
        contents: history.map((turn) => ({
          role: turn.role,
          parts: [{ text: turn.text }],
        })),
      });
      return {
        text: response.text ?? '',
         outputTokens: response.usageMetadata?.candidatesTokenCount ?? 0,
        totalTokens: response.usageMetadata?.totalTokenCount ?? 0,
      };
    } catch (error) {
      this.logger.error('Gemini request failed', error);
      throw new BadGatewayException('The AI service failed to answer');
    }
  }
}
