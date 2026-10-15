import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service.js';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('test')
  test(@Body() body: { prompt: string }) {
    return this.aiService.ask(body.prompt);
  }
}
