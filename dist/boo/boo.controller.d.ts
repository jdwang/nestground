import { Request } from 'express';
import { AppService } from '../app.service';
export declare class BooController {
    private readonly appService;
    constructor(appService: AppService);
    findAllFunc(): string;
    showProfileFunc(request: Request): string;
    helloFunc(): string;
    testqueryFunc(version: any): string;
    testqueryFunc2(version: any): string | {
        url: string;
    };
    wildFunc(): string;
    findOne(params: any): string;
}
