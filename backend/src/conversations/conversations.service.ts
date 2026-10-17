import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ConversationsService {
  constructor(private readonly prisma: PrismaService) {}

 create(title:string,userId:number){
  return this.prisma.conversation.create({
    data:{title,userId}
  })
 }

findAllByUser(){
  return this.prisma.conversation.findMany();
}

findOne(id: number) {
  return this.prisma.conversation.findUnique({
    where: { id },
    include: {
      messages: { orderBy: { createdAt: 'asc' } },
    },
  });
}
}
