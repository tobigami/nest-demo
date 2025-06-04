import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  NotFoundException,
} from '@nestjs/common';
import { StudentsService } from '../students.service';

@Injectable()
export class StudentExistsPipe implements PipeTransform {
  constructor(private readonly studentsService: StudentsService) {}

  async transform(value: number, metadata: ArgumentMetadata) {
    const student = await this.studentsService.getStudent(value);
    if (!student) {
      throw new NotFoundException(`Student with ID ${value} not found`);
    }
    return value;
  }
}
