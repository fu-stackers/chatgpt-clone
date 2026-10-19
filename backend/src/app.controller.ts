import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly hipService: AppService) {}

  @Get()
  getHello(): string {
    return this.hipService.getHello();
  }
}
