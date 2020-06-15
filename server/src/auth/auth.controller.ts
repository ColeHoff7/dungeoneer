import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { User } from '../user/user.interface';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Post('auth/register')
  async register(@Body() body: User) {
    return this.authService.register(body);
  }
}