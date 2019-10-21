import { Module } from '@nestjs/common';
import { BooController } from './boo.controller';
import { AppController } from '../app.controller';
import { CatsModule } from '../cats/cats.module';
import { AppService } from '../app.service';
// import { AppController } from 'src/app.controller';

@Module({
    imports:[CatsModule],
    controllers: [BooController],
    providers:[AppService]
})
export class BooModule {}
