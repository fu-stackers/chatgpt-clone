import { ConversationsService } from './conversations.service.js';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Post()
  create(@Body() body: { title: string; userId: number }) {
    return this.conversationsService.create(body.title, body.userId);
  }

  @Get()
  findAllByUser() {
    return this.conversationsService.findAllByUser();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversationsService.findOne(Number(id));
  }
  @Get('users/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.conversationsService.findByUser(Number(userId));
  }
  @Delete('delete/:id')
  DDeleteOneConversation(@Param('id') id: string) {
    return this.conversationsService.DeleteOneConversation(Number(id));
  }
}
