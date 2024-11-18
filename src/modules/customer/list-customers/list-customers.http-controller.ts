import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { PaginationDTO } from 'src/utils/paginationSchema';
import { ListCustomersService } from './list-customers.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller(routesV1.version)
export class ListCustomersHttpController {
  constructor(private readonly listCustomers: ListCustomersService) {}

  @Get(routesV1.customer.root)
  async execute(@Query() query: PaginationDTO, @Req() req: Request) {
    const { page, limit, search } = query;

    return await this.listCustomers.execute(
      {
        limit: Number(limit),
        page: Number(page),
        search,
      },
      req.user.sub,
    );
  }
}
