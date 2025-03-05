
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.services';
import { AdminController } from './admin.controller';

@Module({
  controllers: [CatsController, AdminController],
  providers: [CatsService],
})
export class CatsModule {}
