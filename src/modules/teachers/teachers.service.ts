import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeacherDto } from 'src/modules/teachers/dto/create.teacher.dto';
import { UpdateTeacherDto } from 'src/modules/teachers/dto/updateTeacherDto';
import { Teachers } from 'src/modules/teachers/teacher.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teachers) private teacherRepo: Repository<Teachers>,
  ) {}

  findById(id: number): Promise<Teachers | null> {
    return this.teacherRepo.findOne({ where: { id } });
  }

  findAll(): Promise<Teachers[]> {
    return this.teacherRepo.find();
  }

  createTeacher(data: CreateTeacherDto): Promise<Teachers> {
    const newTeacher = this.teacherRepo.create(data);
    return this.teacherRepo.save(newTeacher);
  }

  async updatePathTeacher(
    id: number,
    data: UpdateTeacherDto,
  ): Promise<Teachers> {
    const teacher = await this.findById(id);

    const newData = {
      ...teacher,
      ...data,
    };

    const updateRecord = await this.teacherRepo.save(newData);
    if (!updateRecord)
      throw new HttpException(
        'Failed to retrieve updated student',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    return updateRecord;
  }

  deleteTeacher(id: number): Promise<DeleteResult> {
    return this.teacherRepo.delete({ id });
  }
}
