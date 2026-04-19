import { Controller } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController() // 👈 СКРЫВАЕТ ВЕСЬ КОНТРОЛЛЕР ИЗ SWAGGER
@Controller('users')
export class UsersController {
  // пример методов (если есть)

  // @Get()
  // findAll() {
  //   return [];
  // }
}