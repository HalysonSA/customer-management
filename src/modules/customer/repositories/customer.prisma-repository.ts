import { Injectable } from '@nestjs/common';
import { CustomerRepositoryPort } from './customer.repository.port';
import {
  CreateCustomerPrisma,
  ResultCustomerPrisma,
  UpdateCustomerDTO,
} from '../dtos/customerDTO';
import { PrismaService } from 'src/libs/database/prisma.service';
import { TPagination, TPaginationResponse } from 'src/utils/paginationSchema';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomerRepository implements CustomerRepositoryPort {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCustomerPrisma) {
    return await this.prismaService.customer.create({ data });
  }

  async update(data: UpdateCustomerDTO, id: string) {
    return await this.prismaService.customer.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async softDelete(id: string) {
    return await this.prismaService.customer.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async findAll(
    pagination: TPagination,
  ): Promise<TPaginationResponse<ResultCustomerPrisma>> {
    const { limit, page, search } = pagination;

    const offset = limit * (page - 1);

    const whereCondition: Prisma.CustomerWhereInput = search
      ? {
          OR: [
            { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
            { email: { contains: search, mode: Prisma.QueryMode.insensitive } },
          ],
        }
      : {};

    const totalRecords = await this.prismaService.customer.count({
      where: whereCondition,
    });

    const customers = await this.prismaService.customer.findMany({
      where: {
        deletedAt: null,
        ...whereCondition,
      },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        addresses: true,
      },
    });

    const totalPages = Math.ceil(totalRecords / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;

    return {
      data: customers,
      pages: {
        limit,
        total: totalRecords,
        current: page,
        hasNext,
        hasPrev,
        totalPages,
        next: hasNext ? page + 1 : null,
        prev: hasPrev ? page - 1 : null,
      },
    };
  }
}
