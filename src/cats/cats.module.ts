
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.services';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
