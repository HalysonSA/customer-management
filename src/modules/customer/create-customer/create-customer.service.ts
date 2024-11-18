import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from '../dtos/customerDTO';
import { CUSTOMER_REPOSITORY } from '../customer.di-token';
import { CustomerRepositoryPort } from '../repositories/customer.repository.port';
import { USER_REPOSITORY } from 'src/modules/user/user.di-tokens';
import { UserRepositoryPort } from 'src/modules/user/repositories/user.repository.port';

@Injectable()
export class CreateCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepo: CustomerRepositoryPort,
    @Inject(USER_REPOSITORY)
    private readonly userRepo: UserRepositoryPort,
  ) {}

  async execute(data: CreateCustomerDTO, auth0_id: string) {
    const { id } = await this.userRepo.findByAuth0(auth0_id);

    return await this.customerRepo.create({ ...data, ownerId: id });
  }
}
