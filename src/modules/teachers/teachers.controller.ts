import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { Teachers } from 'src/modules/teachers/teacher.entity';
import { CreateTeacherDto } from 'src/modules/teachers/dto/create.teacher.dto';
import { DeleteResult } from 'typeorm';
import { UpdateTeacherDto } from './dto/updateTeacherDto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get('search')
  findAll(): Promise<Teachers[]> {
    return this.teachersService.findAll();
  }

  @Post('create')
  createTeacher(@Body() body: CreateTeacherDto): Promise<Teachers> {
    return this.teachersService.createTeacher(body);
  }

  @Patch(':id')
  updatePatchTeacher(@Param('id') id: number, @Body() body: UpdateTeacherDto): Promise<Teachers> {
    return this.teachersService.updatePathTeacher( id, body);
  }

  @Delete(':id')
  deleteTeacher(@Param('id') id: number): Promise<DeleteResult> {
    return this.teachersService.deleteTeacher(id);
  }

  @Get(':id')
  getTeacherById(@Param('id') id: number): Promise<Teachers | null> {
    return this.teachersService.findById(id);
  }
}
