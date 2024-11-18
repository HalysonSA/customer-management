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
    ownerId: string,
  ): Promise<TPaginationResponse<ResultCustomerPrisma>>;
  update(
    data: UpdateCustomerDTO,
    id: string,
    ownerId: string,
  ): Promise<ResultCustomerPrisma>;
  softDelete(id: string, ownerId: string): Promise<ResultCustomerPrisma>;
}
