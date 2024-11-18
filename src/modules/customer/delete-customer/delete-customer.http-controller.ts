import { Controller, Delete, Param } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { DeleteCustomerService } from './delete-customer.service';

@Controller(routesV1.version)
export class DeleteCustomerHttpController {
  constructor(private readonly deleteCustomer: DeleteCustomerService) {}

  @Delete(routesV1.customer.find)
  async execute(@Param() param: { id: string }) {
    return await this.deleteCustomer.execute(param.id);
  }
}
