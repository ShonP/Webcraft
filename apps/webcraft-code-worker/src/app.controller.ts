import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

interface ClaudeCommandDto {
  prompt: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('claude')
  async runClaudeCommand(@Body() body: ClaudeCommandDto) {
    return await this.appService.runClaudeCommand(body.prompt);
  }
}
