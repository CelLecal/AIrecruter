import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  getAuth(): string {
    return 'auth';
  }

  // async signIn(username, pass) {
  //   const user = await this.usersService.findOne(username):
  //   if (user?.login !== pass) {
  //     throw new UnauthorizedException();
  //   }
  // }
  // constructor(
  //   @InjectRepository(User)
  //   private usersRepository: Repository<User>,
  // ) {}
  // async register(email: string, password: string): Promise<User> {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = this.usersRepository.create({
  //     email,
  //     password: hashedPassword,
  //   });
  //   return this.usersRepository.save(user);
  // }
  // async validateUser(email: string, password: string): Promise<User | null> {
  //   const user = await this.usersRepository.findOne({ where: { email } });
  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     return user;
  //   }
  //   return null;
  // }
}
