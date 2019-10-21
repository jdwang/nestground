import { Controller ,Get ,HttpCode ,Header, Req,Query,Redirect,Param} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from '../app.service';

@Controller('boo')
export class BooController {

    constructor(private readonly appService: AppService) {}


    @Get()
    findAllFunc(): string{
        return 'Yes master'
    }
    


    // 添加header
    @Get('profile')
    // @HttpCode(204)
    @Header('Cache-Control', 'none')
    showProfileFunc(@Req() request: Request): string{
        console.log(request.body)
        return `Boo is a puppy.`
    }

    // 调用service
    @Get('sayhello')
    helloFunc(): string{
        return this.appService.getHello();
    }

    @Get('testquery')
    testqueryFunc(@Query('version') version): string{
        return version
    }

    
    

    
    // 重定向
    @Get('testquery2')
    @Redirect('https://docs.nestjs.com', 302)
    testqueryFunc2(@Query('version') version){
        if(version&&version == 5){
            return {url:"https://docs.nestjs.com/v5/"}
        }else{
            return `This is version ${version}`
        }
    }
   
    @Get('testquery3')
    @Redirect('https://docs.nestjs.com', 302)

    
    // 正则匹配路径
    @Get('wild*')
    wildFunc(): string{
        return `This route uses a wildcard`
    }

    // 这个方法之后的路径都会被当作id
    @Get(':id')
    // @Get(':id/detail')
    findOne(@Param() params): string{
        return `This is No. ${params.id}`
    }

    // @Get('fromcats')
    // showCats(): string{
    //     return this.findAll()
    // }





    // findOne(@Param('id') id): string{
    //     return `This is No ${id}`
    // }
    // 重定向
    // @Get('testquery3')
    // @Redirect('https://docs.nestjs.com', 302)
    // 重定向
  
}
