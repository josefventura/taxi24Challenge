import { Body, Get, Param, Post, Put, Controller, Res } from "@nestjs/common";
import { Travel } from "./travels.model";
import { TravelService } from "./travels.service";
import {  Response } from "express";

@Controller('api/v1/travel')
export class TravelController{

    constructor(private readonly travelService: TravelService){}
    
    @Get()
    async getAllTravels( @Res() response: Response ): Promise<any>{
        const result = await this.travelService.getAllTravels()
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Post()
    async postTravel( @Body() postData: Travel, @Res() response: Response ): Promise<any>{
        const result = await this.travelService.createTravel(postData);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Get(":id")
    async getPassenger(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        const result = await this.travelService.getTravel(id);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Put(":id")
    async updateTravel(@Param('id') id:number, @Body() data: Travel, @Res() response: Response): Promise<any>{
        const result =  await this.travelService.updateTravel(id, data);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

}