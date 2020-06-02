import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Armor } from './armor.interface';

@Injectable()
export class ArmorService {
  constructor(@InjectModel('ArmorModel') private armorModel: Model<Armor>) {}

  async get(): Promise<Armor[]> {
    return this.armorModel.find().exec();
  }

  async getById(id: string): Promise<Armor> {
    return this.armorModel.findById(id).exec();
  }

  async getByName(name: string): Promise<Armor[]> {
    return this.armorModel.find({ name: name }).exec();
  }

  async getByArmorClass(armorClass: string): Promise<Armor[]> {
    return this.armorModel.find({ class: armorClass }).exec();
  }
}
