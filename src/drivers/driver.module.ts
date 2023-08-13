import { PrismaService } from "src/prisma.service";
import { DriverController } from "./driver.controller";
import { DriverService } from "./driver.service";
import { Module } from "@nestjs/common";


@Module({
    controllers: [DriverController],
    providers: [DriverService, PrismaService]
})

export class DriverModule{}