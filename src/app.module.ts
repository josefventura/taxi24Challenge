import { Module } from '@nestjs/common';
import { DriverModule } from './drivers/driver.module';


@Module({
  imports: [DriverModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
