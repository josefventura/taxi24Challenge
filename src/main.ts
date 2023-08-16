import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './http-exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
  .setTitle('Taxi 24')
  .setDescription('Endpoints del servicio para la aplicacion de Taxi 24')
  .setVersion('1.0')
  .addTag('Drivers', 'Servicios para los conductores')
  .addTag('Passengers', 'Servicios para los pasajeros')
  .addTag('Invoices', 'Servicios de facturación')
  .addTag('Travels', 'Servicios para los viajes')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document);
  app.useGlobalFilters(new HttpExceptionFilter());
  
  await app.listen(3001);
}
bootstrap();
