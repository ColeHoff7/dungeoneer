import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: User = await this.userService.findOne(username);

    if(user){
        const match = await bcrypt.compare(pass, user.password);
        if(match){
            return user.toObject();
        }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: User): Promise<any>{
    const newUser = await this.userService.insertOne(user);
    return newUser.toObject();
  }
}