import { Injectable } from '@nestjs/common';
import { CustomerRepositoryPort } from './customer.repository.port';
import { CreateCustomerPrisma } from '../dtos/customerDTO';
import { PrismaService } from 'src/libs/database/prisma.service';

@Injectable()
export class CustomerRepository implements CustomerRepositoryPort {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCustomerPrisma) {
    return await this.prismaService.customer.create({ data });
  }
}
