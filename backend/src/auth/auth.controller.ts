import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    //   const user = await this.authService.register(body.email, body.password);
    //   return { message: 'Пользователь зарегистрирован', userId: user.id };
  }
}
