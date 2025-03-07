import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './DTOs/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async singIn(singInDto: SignInDto): Promise<{ accessToken: string }> {    
    const { id, pwd } = singInDto;
    const user = await this.userService.findOne(id);

    if (user?.password !== pwd) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.name };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
