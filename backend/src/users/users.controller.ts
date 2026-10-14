import { UsersService } from './users.service.js';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Post()
  create(@Body() body: { email: string }) {
    return this.UsersService.create(body.email);
  }
  @Get()
  findAll() {
    return this.UsersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UsersService.findOne(Number(id));
  }
}
