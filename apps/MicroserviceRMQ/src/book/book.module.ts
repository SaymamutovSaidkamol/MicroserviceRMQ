import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOK',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://ueozrtou:B6vdEInoEjGs7MzohjkvfK8fp6EdfLkl@campbell.lmq.cloudamqp.com/ueozrtou',
          ],
          queue: 'cats_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
