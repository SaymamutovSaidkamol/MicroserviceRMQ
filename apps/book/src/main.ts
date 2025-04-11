import { NestFactory } from '@nestjs/core';
import { BookModule } from './book.module';
import { AppModule } from 'apps/MicroserviceRMQ/src/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://ueozrtou:B6vdEInoEjGs7MzohjkvfK8fp6EdfLkl@campbell.lmq.cloudamqp.com/ueozrtou'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
