import { Module ,NestModule,MiddlewareConsumer,RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BooModule } from './boo/boo.module';
import {LoggerMiddleware ,logger} from './common/middleware/logs.middleware'

@Module({
  imports: [CatsModule, BooModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer
      .apply(logger)
      // .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST }
      // )
      .forRoutes(CatsController)
        // .forRoutes({path:'cats',method:RequestMethod.GET});
      // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
  }

}
