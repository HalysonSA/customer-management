import { Inject, Injectable } from '@nestjs/common';
import { TPagination } from 'src/utils/paginationSchema';
import { CUSTOMER_REPOSITORY } from '../customer.di-token';
import { CustomerRepositoryPort } from '../repositories/customer.repository.port';

@Injectable()
export class ListCustomersService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepo: CustomerRepositoryPort,
  ) {}

  async execute(pagination: TPagination) {
    return await this.customerRepo.findAll(pagination);
  }
}
