import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from './user.repository.port';
import { PrismaService } from 'src/libs/database/prisma.service';
import { CreateUserPrisma, ResponseUserPrisma } from '../dtos/userDTO';

@Injectable()
export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUserPrisma): Promise<ResponseUserPrisma> {
    return await this.prismaService.user.create({
      data: {
        ...data,
      },
    });
  }

  async findByAuth0(auth0_id: string): Promise<ResponseUserPrisma> {
    return await this.prismaService.user.findUniqueOrThrow({
      where: {
        auth0_id,
      },
    });
  }
}
