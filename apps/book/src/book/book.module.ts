import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import {BookModule as ModuleBook} from "../book.module"

@Module({
  imports: [ModuleBook],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
