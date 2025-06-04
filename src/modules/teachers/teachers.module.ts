import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teachers } from 'src/modules/teachers/teacher.entity';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
  imports: [TypeOrmModule.forFeature([Teachers])],
})
export class TeachersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TeachersController);
  }
}
