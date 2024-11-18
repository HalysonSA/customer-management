import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { CreateCustomerService } from './create-customer.service';
import { CreateCustomerDTO } from '../dtos/customerDTO';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller(routesV1.version)
export class CreateCustomerHttpController {
  constructor(private readonly createCustomer: CreateCustomerService) {}

  @Post(routesV1.customer.root)
  async execute(@Body() body: CreateCustomerDTO, @Req() req: Request) {
    return await this.createCustomer.execute(body, req.user.sub);
  }
}
