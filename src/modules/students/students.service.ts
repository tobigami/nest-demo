import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  getStudent(id?: string) {
    if (id) {
      return JSON.parse(
        JSON.stringify({ id, name: 'Student ' + id, email: '' }),
      );
    }
    return JSON.parse('{"name": "John Doe", "email": ""}');
  }

  searchStudents(query: any): any {
    return {
      message: 'Search functionality is not implemented yet',
      query,
    };
  }

  createStudent(body: any): any {
    return {
      message: 'Create functionality is not implemented yet',
      body,
    };
  }
}
