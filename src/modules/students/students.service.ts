import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  createStudent(body: Partial<Student>): Promise<Student> {
    const newStudent = this.studentRepo.create(body);
    return this.studentRepo.save(newStudent);
  }

  deleteStudent(id: number) {
    return this.studentRepo.delete({ id });
  }

  async updatePutStudent(id: number, body: Partial<Student>) {
    await this.studentRepo.update(id, body);
    return this.getStudent(id);
  }

  async updatePatchStudent(id: number, body: Partial<Student>) {
    const student = await this.getStudent(id);
    if (!student) {
      throw new Error('Student not found');
    }

    const newData = {
      ...student,
      ...body,
    };

    return this.studentRepo.save(newData);
  }
}
