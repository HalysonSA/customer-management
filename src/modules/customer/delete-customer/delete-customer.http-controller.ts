import { Controller, Delete, Param, Req, UseGuards } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { DeleteCustomerService } from './delete-customer.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller(routesV1.version)
export class DeleteCustomerHttpController {
  constructor(private readonly deleteCustomer: DeleteCustomerService) {}

  @Delete(routesV1.customer.find)
  async execute(@Param() param: { id: string }, @Req() req: Request) {
    return await this.deleteCustomer.execute(param.id, req.user.sub);
  }
}
