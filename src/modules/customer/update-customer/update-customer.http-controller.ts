import { Body, Controller, Param, Patch, Query, Req } from '@nestjs/common';
import { routesV1 } from 'src/configs/app.routes';
import { UpdateCustomerService } from './update-customer.service';
import { UpdateCustomerDTO } from '../dtos/customerDTO';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
@UseGuards(AuthGuard('jwt'))
@Controller(routesV1.version)
export class UpdateCustomerHttpController {
  constructor(private readonly updateCustomer: UpdateCustomerService) {}

  @Patch(routesV1.customer.find)
  async execute(
    @Body() body: UpdateCustomerDTO,
    @Param() param: { id: string },
    @Req() req: Request,
  ) {
    return await this.updateCustomer.execute(body, param.id, req.user.sub);
  }
}
