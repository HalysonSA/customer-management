import {
  CreateCustomerPrisma,
  ResultCustomerPrisma,
} from '../dtos/customerDTO';

export interface CustomerRepositoryPort {
  create(data: CreateCustomerPrisma): Promise<ResultCustomerPrisma>;
}
