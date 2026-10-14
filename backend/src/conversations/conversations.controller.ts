import { ConversationsService } from './conversations.service.js';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}
  
  @Post()
  create(@Body() body: { title: string; userId: number }) {
    return this.conversationsService.create(body.title, body.userId);
  }

  @Get()
  findAllByUser(@Query('userId') userId: string) {
    return this.conversationsService.findAllByUser(Number(userId));
  }

  @Get(':id')
findOne(@Param('id') id: string) {
  return this.conversationsService.findOne(Number(id));
}
  
}
