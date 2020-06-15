import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('UserModel') private userModel: Model<User>) {}

  async insertOne(user: User): Promise<User> {
    const newUser = new this.userModel({username: user.username, password: user.password, email: user.email});
    return newUser.save();
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({username: username}).exec();
  }
}