import { Inject, Injectable } from '@nestjs/common';
import { CUSTOMER_REPOSITORY } from '../customer.di-token';
import { CustomerRepositoryPort } from '../repositories/customer.repository.port';

@Injectable()
export class DeleteCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepo: CustomerRepositoryPort,
  ) {}

  async execute(id: string) {
    return await this.customerRepo.softDelete(id);
  }
}
