import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../user.di-tokens';
import { UserRepositoryPort } from '../repositories/user.repository.port';
import { CreateUserDTO } from '../dtos/userDTO';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepo: UserRepositoryPort,
  ) {}

  async execute(data: CreateUserDTO) {
    return await this.userRepo.create(data);
  }
}
