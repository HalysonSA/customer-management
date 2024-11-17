import { TPagination, TPaginationResponse } from 'src/utils/paginationSchema';
import {
  CreateCustomerPrisma,
  ResultCustomerPrisma,
} from '../dtos/customerDTO';

export interface CustomerRepositoryPort {
  create(data: CreateCustomerPrisma): Promise<ResultCustomerPrisma>;
  findAll(
    pagination: TPagination,
  ): Promise<TPaginationResponse<ResultCustomerPrisma>>;
}
