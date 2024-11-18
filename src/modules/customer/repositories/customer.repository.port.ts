import { TPagination, TPaginationResponse } from 'src/utils/paginationSchema';
import {
  CreateCustomerPrisma,
  ResultCustomerPrisma,
  UpdateCustomerDTO,
} from '../dtos/customerDTO';

export interface CustomerRepositoryPort {
  create(data: CreateCustomerPrisma): Promise<ResultCustomerPrisma>;
  findAll(
    pagination: TPagination,
  ): Promise<TPaginationResponse<ResultCustomerPrisma>>;
  update(data: UpdateCustomerDTO, id: string): Promise<ResultCustomerPrisma>;
  softDelete(id: string): Promise<ResultCustomerPrisma>;
}
