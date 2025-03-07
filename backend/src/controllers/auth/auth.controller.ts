import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
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

    return {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDE5NTM4MjJ9.s5B7N1qJ3a9mLq8YFkQz2yX1Uo6KpB3D4Tz9LxV8P0M',
    };
  }
}
