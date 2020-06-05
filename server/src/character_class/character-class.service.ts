import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CharacterClass } from './character-class.interface';

@Injectable()
export class CharacterClassService {
  constructor(
    @InjectModel('CharacterClassModel')
    private characterClassModel: Model<CharacterClass>
  ) {}

  async get(): Promise<CharacterClass[]> {
    return this.characterClassModel.find().exec();
  }

  async getById(id: string): Promise<CharacterClass> {
    return this.characterClassModel.findById(id).exec();
  }

  async getByName(name: string): Promise<CharacterClass[]> {
    return this.characterClassModel.find({ name: name }).exec();
  }
}
