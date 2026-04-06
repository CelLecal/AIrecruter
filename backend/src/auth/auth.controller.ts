import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  // constructor(private authService: AuthService) {}
  // @Post('register')
  // async register(@Body() createUserDto: CreateUserDto) {
  //   const user = await this.authService.register(
  //     createUserDto.email,
  //     createUserDto.password,
  //   );
  //   return { message: 'Registration successful', userId: user.id };
  // }
}
