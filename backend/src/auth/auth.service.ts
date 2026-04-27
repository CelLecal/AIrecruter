import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(email: string, password: string) {
    // const hash = await bcrypt.hash(password, 22);
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new BadRequestException('Пароль или email не совпадает.');
    }

    const passwordIsMatch = await bcrypt.compare(password, user.password_hash);
    if (user && passwordIsMatch) {
      return user;
    }
    throw new BadRequestException('Пароль или email не совпадает. Пароль:');
  }
  getAuth() {
    return 'auth';
  }
}
