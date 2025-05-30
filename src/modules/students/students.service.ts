import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from 'src/modules/students/dto/create.students.dto';
import { UpdateStudentDto } from 'src/modules/students/dto/update.students.dto';
import { Student } from 'src/modules/students/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}

  findAll() {
    return this.studentRepo.find();
  }

  findOne({ id }: { id: number }) {
    return this.studentRepo.findOne({ where: { id } });
  }

  getStudent(id?: number): Promise<Student | null> {
    return this.studentRepo.findOne({ where: { id } });
  }

  searchStudents(query: any): Promise<Student[]> {
    return this.studentRepo.find();
  }

  createStudent(body: CreateStudentDto): Promise<Student> {
    const newStudent = this.studentRepo.create(body);
    return this.studentRepo.save(newStudent);
  }

  async deleteStudent(id: number) {
    const student = await this.getStudent(id);
    console.log('student :>> ', student);
    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    return this.studentRepo.delete({ id });
  }

  async updatePutStudent(id: number, body: UpdateStudentDto): Promise<Student> {
    const student = await this.getStudent(id);
    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    const studentId = student.id;
    const createdAt = student.createdAt;

    const defaultValues: Partial<Student> = {
      name: '',
      age: 0,
      isActive: false,
    };

    const updatedStudent = {
      ...defaultValues,
      ...body,
      id: studentId,
      createdAt,
    };

    await this.studentRepo.save(updatedStudent);

    const updatedRecord = await this.getStudent(id);
    if (!updatedRecord) {
      throw new HttpException(
        'Failed to retrieve updated student',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return updatedRecord;
  }

  async updatePatchStudent(
    id: number,
    body: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.getStudent(id);
    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    const newData = {
      ...student,
      ...body,
    };

    await this.studentRepo.save(newData);

    const updatedRecord = await this.getStudent(id);
    if (!updatedRecord) {
      throw new HttpException(
        'Failed to retrieve updated student',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return updatedRecord;
  }
}
