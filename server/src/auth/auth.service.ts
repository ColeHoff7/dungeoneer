import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if(user){
        const match = await bcrypt.compare(pass, user.password);
        if(match){
            const {password, ...result} = user;
            return result;
        }
    }
    return null;
  }

  async register(user: User): Promise<any>{
    const {password, ...result} = await this.userService.insertOne(user);
    return result;
  }
}