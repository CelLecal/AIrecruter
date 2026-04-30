import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'example_mail@test.ru' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'example_password' })
  @IsString()
  @MinLength(6)
  password: string;
}