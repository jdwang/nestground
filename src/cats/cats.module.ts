import { Module , Global} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Global()
@Module({
    imports: [],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
