import { Module } from '@nestjs/common';
import { BookModule as ModelBook } from './book/book.module';

@Module({
  imports: [ModelBook],
  controllers: [],
  providers: [],
})
export class BookModule {}
