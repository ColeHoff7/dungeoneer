import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './skill.interface';

@Injectable()
export class SkillService {
  constructor(@InjectModel('SkillModel') private skillModel: Model<Skill>) {}

  async get(): Promise<Skill[]> {
    return this.skillModel.find().exec();
  }

  async getById(id: string): Promise<Skill> {
    return this.skillModel.findById(id).exec();
  }

  async getByName(name: string): Promise<Skill[]> {
    return this.skillModel.find({ name: name }).exec();
  }
}
