import { Module, Provider } from '@nestjs/common';
import { CreateCustomerService } from './create-customer/create-customer.service';
import { CreateCustomerHttpController } from './create-customer/create-customer.http-controller';
import { CUSTOMER_REPOSITORY } from './customer.di-token';
import { CustomerRepository } from './repositories/customer.prisma-repository';
import { PrismaService } from 'src/libs/database/prisma.service';
import { ListCustomersService } from './list-customers/list-customers.service';
import { ListCustomersHttpController } from './list-customers/list-customers.http-controller';
import { UpdateCustomerHttpController } from './update-customer/update-customer.http-controller';
import { UpdateCustomerService } from './update-customer/update-customer.service';
import { DeleteCustomerHttpController } from './delete-customer/delete-customer.http-controller';
import { DeleteCustomerService } from './delete-customer/delete-customer.service';
import { USER_REPOSITORY } from '../user/user.di-tokens';
import { UserRepository } from '../user/repositories/user.prisma-repository';

const providers: Provider[] = [
  CreateCustomerService,
  ListCustomersService,
  UpdateCustomerService,
  DeleteCustomerService,
  PrismaService,
];
const respositories: Provider[] = [
  {
    provide: CUSTOMER_REPOSITORY,
    useClass: CustomerRepository,
  },
  {
    provide: USER_REPOSITORY,
    useClass: UserRepository,
  },
];
const controllers = [
  CreateCustomerHttpController,
  ListCustomersHttpController,
  UpdateCustomerHttpController,
  DeleteCustomerHttpController,
];

@Module({
  providers: [...providers, ...respositories],
  controllers: [...controllers],
})
export class CustomerModule {}
