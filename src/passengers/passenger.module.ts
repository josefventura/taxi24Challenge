import { PrismaService } from "src/prisma.service";
import { Module } from "@nestjs/common";
import { PassengerController } from "./passenger.controller";
import { PassengerService } from "./passenger.service";


@Module({
    controllers: [PassengerController],
    providers: [PrismaService, PassengerService]
})

export class PassengerModule{}