import { Body, Get, Param, Post, Put, Controller, Res, HttpException } from "@nestjs/common";
import { Passenger } from "./passenger.model";
import { PassengerService } from "./passenger.service";
import {  Response } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Passengers')
@Controller('passengers')
export class PassengerController{

    constructor(private readonly passengerService: PassengerService){}
    
    @Get()
    @ApiOperation({ summary: 'Servicio para obtener todos los pasajeros' })
    async getAllPassengers( @Res() response: Response ): Promise<any>{
        try{
            const result = await this.passengerService.getAllPassengers()
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
    @ApiOperation({ summary: 'Servicio para crear un nuevo pasajero' })
    async postPassenger( @Body() postData: Passenger, @Res() response: Response ): Promise<any>{
        try{
            const result = await this.passengerService.createPassenger(postData);
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
    @ApiOperation({ summary: 'Servicio para obtener un pasajero por su id' })
    async getPassenger(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        try{
            const result = await this.passengerService.getPassenger(id);
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 404); 
        }
    }

    @Get(":lat/:lng")
    @ApiOperation({ summary: 'Servicio para obtener una lista de 3 conductores disponibles por cercania (del mas cercano al mas lejano)' })
    async getNearestDrivers(@Param('lat') lat:number,@Param('lng') lng:number, @Res() response: Response): Promise<any | null>{
        try{
            const result = await this.passengerService.getNearestDrivers(Number(lat), Number(lng));
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
    @ApiOperation({ summary: 'Servicio para actualizar un pasajero' })
    async updatePassenger(@Param('id') id:number, @Body() data: Passenger, @Res() response: Response): Promise<any>{
        try{
            const result =  await this.passengerService.updatePassenger(id, data);
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