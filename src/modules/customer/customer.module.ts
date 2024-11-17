import { Module, Provider } from '@nestjs/common';
import { CreateCustomerService } from './create-customer/create-customer.service';
import { CreateCustomerHttpController } from './create-customer/create-customer.http-controller';
import { CUSTOMER_REPOSITORY } from './customer.di-token';
import { CustomerRepository } from './repositories/customer.prisma-repository';
import { PrismaService } from 'src/libs/database/prisma.service';
import { ListCustomersService } from './list-customers/list-customers.service';
import { ListCustomersHttpController } from './list-customers/list-customers.http-controller';

const providers: Provider[] = [
  CreateCustomerService,
  ListCustomersService,
  PrismaService,
];
const respositories: Provider[] = [
  {
    provide: CUSTOMER_REPOSITORY,
    useClass: CustomerRepository,
  },
];
const controllers = [CreateCustomerHttpController, ListCustomersHttpController];

@Module({
  providers: [...providers, ...respositories],
  controllers: [...controllers],
})
export class CustomerModule {}
