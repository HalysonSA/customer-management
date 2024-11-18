import { Inject, Injectable } from '@nestjs/common';
import { CUSTOMER_REPOSITORY } from '../customer.di-token';
import { CustomerRepositoryPort } from '../repositories/customer.repository.port';
import { UpdateCustomerDTO } from '../dtos/customerDTO';

@Injectable()
export class UpdateCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepo: CustomerRepositoryPort,
  ) {}

  async execute(data: UpdateCustomerDTO, id: string) {
    return await this.customerRepo.update(data, id);
  }
}
