import { Injectable } from '@nestjs/common';
import { AuthenticationClient } from 'auth0';

@Injectable()
export default class LoginUsersService {
  async execute(code: string) {
    const auth0 = new AuthenticationClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
    });

    const { data } = await auth0.oauth.authorizationCodeGrant({
      code,
      redirect_uri: 'http://localhost:3000/callback',
    });

    return {
      accessToken: data.access_token,
      id_token: data.id_token,
      expiresIn: data.expires_in,
      refreshToken: data.refresh_token,
    };
  }
}
