import { ConversationsService } from './../conversations/conversations.service.js';
import {
  Injectable,
  BadGatewayException,
  NotFoundException,
} from '@nestjs/common';
import { AiService } from '../ai/ai.service.js';
import type { ChatTurn } from '../ai/ai.service.js';
import { MessagesService } from '../messages/messages.service.js';

@Injectable()
export class ChatService {
  constructor(
    private readonly conversations: ConversationsService,
    private readonly message: MessagesService,
    private readonly ai: AiService,
  ) {}
  async sendMessage(conversationId: number, content: string) {
    const conversation = await this.conversations.findOne(conversationId);
    if (!conversation) {
      throw new NotFoundException('Conversation not found pls create first');
    }
    const userMessage = await this.message.create(
      conversationId,
      'user',
      content,
    );
      const history: ChatTurn[] = [
      ...conversation.messages.map((message) => this.toChatTurn(message)),
      { role: 'user', text: content },
    ];
    const answer = await this.ai.chat(history);
    if (!answer.text) {
      throw new BadGatewayException('The AI returned an empty answer');
    }
    const assistantMessage = await this.message.create(
      conversationId,
      'assistant',
      answer.text,
      answer.outputTokens,
    );
    return { userMessage, assistantMessage };
  }
  private toChatTurn(message: {
    role: 'user' | 'assistant';
    content: string;
  }): ChatTurn {
    return {
      role: message.role === 'assistant' ? 'model' : 'user',
      text: message.content,
    };
  }
}
