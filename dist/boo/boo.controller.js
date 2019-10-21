"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
let BooController = class BooController {
    constructor(appService) {
        this.appService = appService;
    }
    findAllFunc() {
        return 'Yes master';
    }
    showProfileFunc(request) {
        console.log(request.body);
        return `Boo is a puppy.`;
    }
    helloFunc() {
        return this.appService.getHello();
    }
    testqueryFunc(version) {
        return version;
    }
    testqueryFunc2(version) {
        if (version && version == 5) {
            return { url: "https://docs.nestjs.com/v5/" };
        }
        else {
            return `This is version ${version}`;
        }
    }
    wildFunc() {
        return `This route uses a wildcard`;
    }
    findOne(params) {
        return `This is No. ${params.id}`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BooController.prototype, "findAllFunc", null);
__decorate([
    common_1.Get('profile'),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], BooController.prototype, "showProfileFunc", null);
__decorate([
    common_1.Get('sayhello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BooController.prototype, "helloFunc", null);
__decorate([
    common_1.Get('testquery'),
    __param(0, common_1.Query('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], BooController.prototype, "testqueryFunc", null);
__decorate([
    common_1.Get('testquery2'),
    common_1.Redirect('https://docs.nestjs.com', 302),
    __param(0, common_1.Query('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BooController.prototype, "testqueryFunc2", null);
__decorate([
    common_1.Get('testquery3'),
    common_1.Redirect('https://docs.nestjs.com', 302),
    common_1.Get('wild*'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BooController.prototype, "wildFunc", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], BooController.prototype, "findOne", null);
BooController = __decorate([
    common_1.Controller('boo'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], BooController);
exports.BooController = BooController;
//# sourceMappingURL=boo.controller.js.map