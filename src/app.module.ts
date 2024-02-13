import { Module } from '@nestjs/common';
import { DriverModule } from './drivers/driver.module';
import { PassengerModule } from './passengers/passenger.module';
import { InvoiceModule } from './invoices/invoice.module';
import { TravelModule } from './travels/travel.module';
import { EmailModule } from './email/email.module';



@Module({
  imports: [DriverModule, PassengerModule, InvoiceModule, TravelModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
