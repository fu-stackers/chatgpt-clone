import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service.js';

@Controller('conversation/:conversationId/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Post()
  create(
    @Param('conversationId') conversationId: string,
    @Body() body: { role: 'user' | 'assistant'; content: string },
  ) {
    return this.messagesService.create(
      Number(conversationId),
      body.role,
      body.content,
    );
  }

  @Get()
  findAll(@Param('conversationId') conversationId: string) {
    return this.messagesService.findAll(Number(conversationId));
  }
}
