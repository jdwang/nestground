import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/http-exception.filter';

// import {logger} from './common/middleware/logs.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());  //globe filter
  await app.listen(3100);
}
bootstrap();
