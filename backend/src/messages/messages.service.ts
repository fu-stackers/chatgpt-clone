import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  private async ensureConversationExists(conversationId: number) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) {
      throw new NotFoundException('Conversation not found');
    }
  }
  async create(
    conversationId: number,
    role: 'user' | 'assistant',
    content: string,
  ) {
    await this.ensureConversationExists(conversationId);

    return this.prisma.message.create({
      data: { conversationId, role, content },
    });
  }
  async findAll(conversationId:number){
    await this.ensureConversationExists(conversationId);

    return this.prisma.message.findMany({
        where:{conversationId},
        orderBy:{createdAt:'asc'}
    })
  }
}
