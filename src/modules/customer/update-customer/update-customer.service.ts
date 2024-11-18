import { Inject, Injectable } from '@nestjs/common';
import { CUSTOMER_REPOSITORY } from '../customer.di-token';
import { CustomerRepositoryPort } from '../repositories/customer.repository.port';
import { UpdateCustomerDTO } from '../dtos/customerDTO';
import { USER_REPOSITORY } from 'src/modules/user/user.di-tokens';
import { UserRepositoryPort } from 'src/modules/user/repositories/user.repository.port';

@Injectable()
export class UpdateCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepo: CustomerRepositoryPort,
    @Inject(USER_REPOSITORY)
    private readonly userRepo: UserRepositoryPort,
  ) {}

  async execute(data: UpdateCustomerDTO, id: string, auth0_id: string) {
    const user = await this.userRepo.findByAuth0(auth0_id);

    return await this.customerRepo.update(data, id, user.id);
  }
}
