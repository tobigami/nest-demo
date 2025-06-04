import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { TeachersService } from 'src/modules/teachers/teachers.service';

@Injectable()
export class TeacherExistsPipe implements PipeTransform {
  constructor(private readonly teacherService: TeachersService) {}

  async transform(id: number, metadata: ArgumentMetadata): Promise<number> {
    const teacher = await this.teacherService.findById(id);
    if (!teacher) {
      throw new NotFoundException('Teacher with ID ' + id + ' not found');
    }

    return id;
  }
}
