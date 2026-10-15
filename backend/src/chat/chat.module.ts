import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module.js';
import { ConversationsModule } from '../conversations/conversations.module.js';
import { MessagesModule } from '../messages/messages.module.js';
import { ChatController } from './chat.controller.js';
import { ChatService } from './chat.service.js';

@Module({
  imports: [ConversationsModule, MessagesModule, AiModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}