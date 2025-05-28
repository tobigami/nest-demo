import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { StudentsService } from 'src/modules/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('search')
  searchStudents(@Query() query: any) {
    return this.studentsService.searchStudents(query);
  }

  @Post('create')
  createStudent(@Body() body: any) {
    return this.studentsService.createStudent(body);
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentsService.getStudent(id);
  }
}
