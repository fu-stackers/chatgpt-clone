import { Body, Controller, Get, Post } from '@nestjs/common';
import { HelloService } from './hello.service.js';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  // @wku1230
  @Get()
  getAll() {
    return this.helloService.getAll();
  }
  @Post()
  add(@Body() body: { name: string }) {
    return this.helloService.add(body.name);
  }
}
