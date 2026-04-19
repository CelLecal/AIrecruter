import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  getRoot() {
    return 'API работает 🚀';
  }
  
}
