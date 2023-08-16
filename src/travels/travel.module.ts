import { PrismaService } from "src/prisma.service";
import { Module } from "@nestjs/common";
import { TravelController } from "./travels.controller";
import { TravelService } from "./travels.service";
import { InvoiceService } from "src/invoices/invoice.service";



@Module({
    controllers: [TravelController],
    providers: [PrismaService, TravelService, InvoiceService]
})

export class TravelModule{}