import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

   async create(email: string) {
    const user = await this.prisma.user.create({
      data: { email },
    });
    return user
  }
  findAll() {
    return this.prisma.user.findMany();
  }
  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
