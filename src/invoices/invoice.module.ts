import { PrismaService } from "src/prisma.service";
import { Module } from "@nestjs/common";
import { InvoiceController } from "./invoice.controller";
import { InvoiceService } from "./invoice.service";




@Module({
    controllers: [InvoiceController],
    providers: [PrismaService, InvoiceService]
})

export class InvoiceModule{}