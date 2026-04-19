import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],

  providers: [UsersService],

  controllers: [UsersController],

  exports: [UsersService], // 🔥 ВАЖНО: без этого AuthModule не видит UsersService
})
export class UsersModule {}