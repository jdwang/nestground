import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request,Response} from 'express';

@Catch(HttpException)

export class HttpExceptionFilter implements ExceptionFilter{
  catch(exception: HttpException,host:ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().getTime(),
        path: request.url,
      })
  }
}



// 全异常过滤
// @Catch()
// export class AllExceptionsFilter implements ExceptionFilter {
//   catch(exception: unknown, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse();
//     const request = ctx.getRequest();

//     const status =
//       exception instanceof HttpException
//         ? exception.getStatus()
//         : HttpStatus.INTERNAL_SERVER_ERROR;

//     response.status(status).json({
//       statusCode: status,
//       timestamp: new Date().getTime(),
//       path: request.url,
//     });
//   }
// }