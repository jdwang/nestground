"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const boo_controller_1 = require("./boo.controller");
const cats_module_1 = require("../cats/cats.module");
const app_service_1 = require("../app.service");
let BooModule = class BooModule {
};
BooModule = __decorate([
    common_1.Module({
        imports: [cats_module_1.CatsModule],
        controllers: [boo_controller_1.BooController],
        providers: [app_service_1.AppService]
    })
], BooModule);
exports.BooModule = BooModule;
//# sourceMappingURL=boo.module.js.map