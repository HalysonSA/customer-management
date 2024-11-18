import { Body, Controller, Post } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import LoginUsersService from './auth-login.service';

@Controller(routesV1.version)
export class AuthHttpController {
  constructor(private readonly loginService: LoginUsersService) {}

  @Post(routesV1.user.root)
  async login(@Body() body: { code: string }) {
    return await this.loginService.execute(body.code);
  }
}
