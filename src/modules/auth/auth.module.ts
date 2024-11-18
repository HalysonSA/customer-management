import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import LoginUsersService from './auth-login.service';
import { AuthHttpController } from './auth.http-controller';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [AuthHttpController],
  providers: [JwtStrategy, LoginUsersService],
  exports: [PassportModule],
})
export class AuthModule {}
