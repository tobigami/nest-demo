import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  isActive: boolean;
}
