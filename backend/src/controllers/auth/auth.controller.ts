import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    const validEmail = 'mauro@gmail.com';
    const validPassword = '123456';

    if (email !== validEmail || password !== validPassword) {
      throw new HttpException(
        'Invalid email or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { email, role: 'user' };

    const token = this.jwtService.sign(payload);

    return {
      token,
    };
  }
}
