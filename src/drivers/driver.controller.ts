import { Body, Get, Param, Post, Put, Controller, Res } from "@nestjs/common";
import { Driver } from "./driver.model";
import { DriverService } from "./driver.service";
import {  Response } from "express";

@Controller('api/v1/driver')
export class DriverController{

    constructor(private readonly driverService: DriverService){}
    
    @Get()
    async getAllDrivers( @Res() response: Response ): Promise<any>{
        const result = await this.driverService.getAllDrivers()
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Post()
    async postDriver( @Body() postData: Driver, @Res() response: Response ): Promise<any>{
        const result = await this.driverService.createDriver(postData);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Get(":id")
    async getDriver(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        const result = await this.driverService.getDriver(id);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Put(":id")
    async updateDriver(@Param('id') id:number, @Body() data: Driver, @Res() response: Response): Promise<any>{
        const result =  await this.driverService.updateDriver(id, data);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

}