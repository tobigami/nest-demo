import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from 'src/modules/teachers/dto/create.teacher.dto';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}
