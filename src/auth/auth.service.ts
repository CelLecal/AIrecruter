import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 🔥 Простое сравнение без хэша
    if (user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      message: 'Login successful',
      userId: user.id,
      email: user.email,
    };
  }
}