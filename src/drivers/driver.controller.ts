import { Body, Get, Param, Post, Put, Controller, Res, HttpException } from "@nestjs/common";
import { DriverDTO } from "./driver.model";
import { DriverService } from "./driver.service";
import {  Response } from "express";
import { ApiTags, ApiOperation } from "@nestjs/swagger";


@ApiTags('Drivers')
@Controller('drivers')
export class DriverController{

    constructor(private readonly driverService: DriverService){}
    @Get()
    @ApiOperation({ summary: 'Servicio para obtener todos los conductores' })
    async getAllDrivers( @Res() response: Response ): Promise<any>{
        try{   
            const result = await this.driverService.getAllDrivers()
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
        })}catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 404); 
        }
    }
    @Get(":lat/:lng")
    @ApiOperation({ summary: 'Servicio para obtener los conductores disponibles en un radio de 3km' })
    async getNearbyDrivers(@Param('lat') lat: number, @Param('lng') lng:number, @Res() response: Response ): Promise<any>{
        try{
            const result = await this.driverService.getNearbyDrivers(Number(lat), Number(lng));
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            console.log(e)
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 404); 
        }
    }
    @Get('available')
    @ApiOperation({ summary: 'Servicio para obtener los conductores disponibles' })
    async getAllAvailableDrivers( @Res() response: Response ): Promise<any>{
        try{
            const result = await this.driverService.getAllAvailableDrivers()
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 404); 
        }
    }

    @Post()
    @ApiOperation({ summary: 'Servicio para crear un nuevo conductor' })
    async postDriver( @Body() postData: DriverDTO, @Res() response: Response ): Promise<any>{
        try{
            const result = await this.driverService.createDriver(postData);
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 404); 
        }
    }

    @Get(":id")
    @ApiOperation({ summary: 'Servicio para obtener un conductor especifico por su id' })
    async getDriver(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        try{

            const result = await this.driverService.getDriver(id);
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 404); 
        }
    }

    @Put(":id")
    @ApiOperation({ summary: 'Servicio para actualizar un conductor' })
    async updateDriver(@Param('id') id:number, @Body() data: DriverDTO, @Res() response: Response): Promise<any>{
        try{
            const result =  await this.driverService.updateDriver(id, data);
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 404); 
        }
    }

}