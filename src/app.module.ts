import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './modules/customer/customer.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CustomerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
