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
exports.RaceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RaceService = (() => {
    let RaceService = class RaceService {
        constructor(raceModel) {
            this.raceModel = raceModel;
        }
        async get() {
            return this.raceModel.find().exec();
        }
        async getById(id) {
            return this.raceModel.findById(id).exec();
        }
        async getByName(name) {
            return this.raceModel.find({ name: name }).exec();
        }
    };
    RaceService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel('RaceModel')),
        __metadata("design:paramtypes", [mongoose_2.Model])
    ], RaceService);
    return RaceService;
})();
exports.RaceService = RaceService;
//# sourceMappingURL=race.service.js.map