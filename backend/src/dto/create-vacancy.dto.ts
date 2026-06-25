import { IsNumber, IsString, IsNotEmpty } from "class-validator";

export class CreateVacancyDto {
  @IsString()
  title!: string;
  @IsString()
  department!: string;
  @IsString()
  location!: string;
  @IsString()
  required_license_category!: string;
  @IsString()
  status!: string;
  @IsString()
  shift_type!: string;
  @IsNumber()
  min_experience_years!: number;
}
