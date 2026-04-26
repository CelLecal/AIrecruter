import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    const password_hash = await argon2.hash(user!.password_hash);
    const passwordIsMatch = await argon2.verify(password_hash, password);
    if (user && passwordIsMatch) {
      return user;
    }
    throw new BadRequestException('Пароль или email не совпадает.');
  }
  getAuth() {
    return 'auth';
  }
}
