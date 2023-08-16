import { Body, Get, Param, Post, Put, Controller, Res } from "@nestjs/common";
import { Passenger } from "./passenger.model";
import { PassengerService } from "./passenger.service";
import {  Response } from "express";

@Controller('api/v1/passengers')
export class PassengerController{

    constructor(private readonly passengerService: PassengerService){}
    
    @Get()
    async getAllPassengers( @Res() response: Response ): Promise<any>{
        const result = await this.passengerService.getAllPassengers()
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Post()
    async postPassenger( @Body() postData: Passenger, @Res() response: Response ): Promise<any>{
        const result = await this.passengerService.createPassenger(postData);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Get(":id")
    async getPassenger(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        const result = await this.passengerService.getPassenger(id);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Put(":id")
    async updatePassenger(@Param('id') id:number, @Body() data: Passenger, @Res() response: Response): Promise<any>{
        const result =  await this.passengerService.updatePassenger(id, data);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

}