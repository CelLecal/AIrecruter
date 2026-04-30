import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiProperty,
  ApiResponse,
} from '@nestjs/swagger';

class LoginDto {
  @ApiProperty({ example: 'example@mail.com' })
  email: string;

  @ApiProperty({ example: 'example_password' })
  password: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизация пользователя' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Успешный вход' })
  @ApiResponse({ status: 401, description: 'Неверный email или пароль' })
  @Post('login')
  @HttpCode(HttpStatus.OK) 
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }
}