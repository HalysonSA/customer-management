import { Module, Provider } from '@nestjs/common';
import { USER_REPOSITORY } from './user.di-tokens';
import { UserRepository } from './repositories/user.prisma-repository';
import { CreateUserHttpController } from './create-user/create-user.http-controller';
import { CreateUserService } from './create-user/create-user.service';
import { PrismaService } from 'src/libs/database/prisma.service';

const providers: Provider[] = [CreateUserService, PrismaService];

const repositories: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useClass: UserRepository,
  },
];

const controllers = [CreateUserHttpController];

@Module({
  controllers: [...controllers],
  providers: [...repositories, ...providers],
})
export class UserModule {}
