import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'types/types';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw 'Пароль или email не совпадает.';
    }
    const passwordIsMatch = await argon2.verify(user.password_hash, password);
    if (user && passwordIsMatch) {
      return user;
    }
    throw new BadRequestException('Пароль или email не совпадает.');
  }

  async login(user: IUser) {
    const { id, email } = user;
    return {
      id,
      email,
      token: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }
  getAuth() {
    return 'auth';
  }
}
