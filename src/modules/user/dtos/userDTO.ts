import { Prisma } from '@prisma/client';

export type CreateUserPrisma = Prisma.UserCreateArgs['data'];
export type ResponseUserPrisma = Prisma.UserGetPayload<undefined>;

export class CreateUserDTO {
  name: string;
  email: string;
  auth0_id: string;
}
