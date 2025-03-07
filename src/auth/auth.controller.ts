import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './DTOs/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  singIn(@Body() singInDto: SignInDto) {
    return this.authService.singIn(singInDto);
  }
}
