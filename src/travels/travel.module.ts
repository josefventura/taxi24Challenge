import { PrismaService } from "src/prisma.service";
import { Module } from "@nestjs/common";
import { TravelController } from "./travels.controller";
import { TravelService } from "./travels.service";



@Module({
    controllers: [TravelController],
    providers: [PrismaService, TravelService]
})

export class TravelModule{}