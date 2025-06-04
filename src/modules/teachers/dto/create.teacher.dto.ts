import { IsBoolean, isBoolean, IsString, isString } from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  name: string;

  @IsString()
  subject: string;

  @IsBoolean()
  isActive: boolean;
}
