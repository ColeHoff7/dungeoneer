import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weapon } from './weapon.interface';

@Injectable()
export class WeaponService {
  constructor(@InjectModel('WeaponModel') private weaponModel: Model<Weapon>) {}

  async get(): Promise<Weapon[]> {
    return this.weaponModel.find().exec();
  }

  async getById(id: string): Promise<Weapon> {
    return this.weaponModel.findById(id).exec();
  }

  async getByName(name: string): Promise<Weapon[]> {
    return this.weaponModel.find({ name: name }).exec();
  }
}
