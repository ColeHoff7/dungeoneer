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
exports.RaceController = void 0;
const common_1 = require("@nestjs/common");
const race_service_1 = require("./race.service");
let RaceController = (() => {
    let RaceController = class RaceController {
        constructor(raceService) {
            this.raceService = raceService;
        }
        async get() {
            return this.raceService.get();
        }
        async getByName(name) {
            return this.raceService.getByName(name);
        }
        async getById(id) {
            return this.raceService.getById(id);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RaceController.prototype, "get", null);
    __decorate([
        common_1.Get(':name([A-Za-z]+)'),
        __param(0, common_1.Param('name')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], RaceController.prototype, "getByName", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], RaceController.prototype, "getById", null);
    RaceController = __decorate([
        common_1.Controller('race'),
        __metadata("design:paramtypes", [race_service_1.RaceService])
    ], RaceController);
    return RaceController;
})();
exports.RaceController = RaceController;
//# sourceMappingURL=race.controller.js.map