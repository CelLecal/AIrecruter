import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('auth') // 👈 тег для Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: LoginDto }) // 👈 форма появится
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }
}