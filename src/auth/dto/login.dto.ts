import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'example@mail.com' })
  email: string;

  @ApiProperty({ example: 'example_password' })
  password: string;
}