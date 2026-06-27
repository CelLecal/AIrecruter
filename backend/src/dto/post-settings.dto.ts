// activate.dto.ts
import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

export class PostSettingsDto {
  @IsString()
  @IsNotEmpty()
  id!: number;
  @IsBoolean()
  is_active!: boolean;
}
