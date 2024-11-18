import { Body, Controller, Param, Patch, Query } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { UpdateCustomerService } from './update-customer.service';
import { UpdateCustomerDTO } from '../dtos/customerDTO';

@Controller(routesV1.version)
export class UpdateCustomerHttpController {
  constructor(private readonly updateCustomer: UpdateCustomerService) {}

  @Patch(routesV1.customer.find)
  async execute(
    @Body() body: UpdateCustomerDTO,
    @Param() param: { id: string },
  ) {
    return await this.updateCustomer.execute(body, param.id);
  }
}
