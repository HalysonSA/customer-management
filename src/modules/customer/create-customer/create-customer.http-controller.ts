import { Body, Controller, Post } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { CreateCustomerService } from './create-customer.service';
import { CreateCustomerDTO } from '../dtos/customerDTO';

@Controller(routesV1.version)
export class CreateCustomerHttpController {
  constructor(private readonly createCustomer: CreateCustomerService) {}

  @Post(routesV1.customer.root)
  async execute(@Body() body: CreateCustomerDTO) {
    return await this.createCustomer.execute(body);
  }
}
