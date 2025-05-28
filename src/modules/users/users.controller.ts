import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index() {
    return this.usersService.getUser();
  }

  @Get('products')
  getProducts(@Query() query: any) {
    return {
      name: query.name,
      age: query.age,
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post('create')
  createUser(@Body() body: any) {
    return body;
  }
}
