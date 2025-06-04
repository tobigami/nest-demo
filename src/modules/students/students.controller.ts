import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateStudentDto } from 'src/modules/students/dto/create.students.dto';
import { UpdateStudentDto } from 'src/modules/students/dto/update.students.dto';
import { StudentExistsPipe } from 'src/modules/students/pipes/student-exists.pipe';
import { Students } from 'src/modules/students/student.entity';
import { StudentsService } from 'src/modules/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('search')
  searchStudents(@Query() query: any): Promise<Students[]> {
    return this.studentsService.searchStudents(query);
  }

  @Post('create')
  createStudent(@Body() body: CreateStudentDto): Promise<Students> {
    return this.studentsService.createStudent(body);
  }

  @Put(':id')
  updatePutStudent(
    @Param('id', ParseIntPipe, StudentExistsPipe) id: number,
    @Body() body: UpdateStudentDto,
  ): Promise<Students> {
    return this.studentsService.updatePutStudent(id, body);
  }

  @Patch(':id')
  updatePatchStudent(
    @Param('id', ParseIntPipe, StudentExistsPipe) id: number,
    @Body() body: UpdateStudentDto,
  ): Promise<Students> {
    return this.studentsService.updatePatchStudent(id, body);
  }

  @Delete(':id')
  deleteStudent(@Param('id', ParseIntPipe, StudentExistsPipe) id: number) {
    return this.studentsService.deleteStudent(id);
  }

  @Get(':id')
  getStudentById(
    @Param('id', ParseIntPipe, StudentExistsPipe) id: number,
  ): Promise<Students | null> {
    return this.studentsService.getStudent(id);
  }
}
