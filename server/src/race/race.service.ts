import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Race } from './race.interface';

@Injectable()
export class RaceService {
  constructor(@InjectModel('RaceModel') private raceModel: Model<Race>) {}

  async get(): Promise<Race[]> {
    return this.raceModel.find().exec();
  }

  async getById(id: string): Promise<Race> {
    return this.raceModel.findById(id).exec();
  }

  async getByName(name: string): Promise<Race[]> {
    return this.raceModel.find({ name: name }).exec();
  }
}
