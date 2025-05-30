import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateStudentDto } from 'src/modules/students/dto/create.students.dto';
import { UpdateStudentDto } from 'src/modules/students/dto/update.students.dto';
import { Student } from 'src/modules/students/student.entity';
import { StudentsService } from 'src/modules/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('search')
  searchStudents(@Query() query: any): Promise<Student[]> {
    return this.studentsService.searchStudents(query);
  }

  @Post('create')
  createStudent(@Body() body: CreateStudentDto): Promise<Student> {
    return this.studentsService.createStudent(body);
  }

  @Put(':id')
  updatePutStudent(
    @Param('id') id: string,
    @Body() body: UpdateStudentDto,
  ): Promise<Student | null> {
    return this.studentsService.updatePutStudent(+id, body);
  }

  @Patch(':id')
  updatePatchStudent(@Param('id') id: string, @Body() body: UpdateStudentDto) {
    return this.studentsService.updatePatchStudent(+id, body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentsService.deleteStudent(Number(id));
  }

  @Get(':id')
  getStudentById(@Param('id') id: string): Promise<Student | null> {
    return this.studentsService.getStudent(Number(id));
  }
}
