import { Controller, Get, Query } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { PaginationDTO } from 'src/utils/paginationSchema';
import { ListCustomersService } from './list-customers.service';

@Controller(routesV1.version)
export class ListCustomersHttpController {
  constructor(private readonly listCustomers: ListCustomersService) {}

  @Get(routesV1.customer.root)
  async execute(@Query() query: PaginationDTO) {
    const { page, limit, search } = query;

    return await this.listCustomers.execute({
      limit: Number(limit),
      page: Number(page),
      search,
    });
  }
}
