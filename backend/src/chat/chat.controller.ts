import { Body, Controller, Param, Post } from '@nestjs/common';
import { ChatService } from './chat.service.js';

@Controller('conversations/:conversationId/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  send(
    @Param('conversationId') conversationId: string,
    @Body() body: { content: string },
  ) {
    return this.chatService.sendMessage(Number(conversationId), body.content);
  }
}