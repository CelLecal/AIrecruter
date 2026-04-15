import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'добавление юзера';
  }
  getUser(): string {
    return 'user';
  }

  findAll() {
    return `возвращение всех юзеров`;
  }

  findOne(id: number) {
    return `возвращает айди юзеров`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `обновляет айди юзеров`;
  }

  remove(id: number) {
    return `удаляет юзера`;
  }
}
