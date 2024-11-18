import { Controller, Post, Query, UseGuards } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { CreateUserService } from './create-user.service';
import { AuthGuard } from '@nestjs/passport';
import { jwtDecode } from 'jwt-decode';

interface DecodedJWT {
  nickname: string;
  email: string;
  sub: string;
}

@Controller(routesV1.version)
export class CreateUserHttpController {
  constructor(private readonly createUser: CreateUserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post(routesV1.user.root)
  async execute(@Query() query: { id_token: string }) {
    const { email, nickname, sub }: DecodedJWT = jwtDecode(query.id_token);

    const payload = {
      email,
      name: nickname,
      auth0_id: sub,
    };

    return await this.createUser.execute(payload);
  }
}
