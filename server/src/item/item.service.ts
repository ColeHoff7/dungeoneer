import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './item.interface';

@Injectable()
export class ItemService {
  constructor(@InjectModel('ItemModel') private itemModel: Model<Item>) {}

  async get(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async getById(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  async getByName(name: string): Promise<Item[]> {
    return this.itemModel.find({ item: name }).exec();
  }

  async getByCategory(category: string): Promise<Item[]> {
    return this.itemModel.find({ category: category }).exec();
  }

  async getByToolType(toolType: string): Promise<Item[]> {
    return this.itemModel.find({ tool_type: toolType }).exec();
  }
}
