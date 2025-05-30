import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { StudentsModule } from './modules/students/students.module';
import { Student } from 'src/modules/students/student.entity';
import { TeachersModule } from './modules/teachers/teachers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'dev',
      entities: [Student],
      logging: true,
      retryAttempts: 3,
      retryDelay: 3000,
      synchronize: true, // chỉ nên bật true trong môi trường development
    }),
    UsersModule,
    StudentsModule,
    TeachersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
