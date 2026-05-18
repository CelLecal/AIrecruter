import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { IUser } from "types/types";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new BadRequestException("Пароль или email не совпадает.");
    }
    const passwordIsMatch = await bcrypt.compare(
      String(password),
      String(user.password_hash),
    );
    if (user && passwordIsMatch) {
      return user;
    }
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
    return "auth";
  }
}
