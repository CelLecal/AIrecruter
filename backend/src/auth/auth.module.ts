import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from './strategies/local.strategy';

@Module({
  providers: [AuthService, localStrategy],
  exports: [AuthService],
  controllers: [AuthController],
  imports: [UserModule, PassportModule],
})
export class AuthModule {}
