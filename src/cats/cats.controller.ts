import { Controller,Post,Body, Get,HttpStatus,HttpException,UseFilters,ForbiddenException} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';
import { HttpExceptionFilter } from '../common/http-exception.filter';

@Controller('cats')
// @UseFilters(new HttpExceptionFilter)   //controller级别
export class CatsController {
    constructor(private readonly catsService:CatsService){}

    @Post('create')
    
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto)
        this.catsService.create(createCatDto);
    }

    @Get()
    // @UseFilters(new HttpExceptionFilter) //api级别
    async findAll(): Promise<Cat[]>{
        // throw new ForbiddenException();
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        return this.catsService.findAll();
    }

    @Get('meet')
    meet(): string{
        throw new ForbiddenException();
        // return this.catsService.hello();
    }

}



