import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from '../dtos/customerDTO';
import { CUSTOMER_REPOSITORY } from '../customer.di-token';
import { CustomerRepositoryPort } from '../repositories/customer.repository.port';

@Injectable()
export class CreateCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepo: CustomerRepositoryPort,
  ) {}

  async execute(data: CreateCustomerDTO) {
    return await this.customerRepo.create(data);
  }
}
