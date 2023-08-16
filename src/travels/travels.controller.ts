import { Body, Get, Param, Post, Put, Controller, Res, HttpException } from "@nestjs/common";
import { TravelsDTO } from "./travels.model";
import { TravelService } from "./travels.service";
import { Response } from "express";
import { InvoiceService } from "src/invoices/invoice.service";
import { ApiTags, ApiOperation } from "@nestjs/swagger";


@ApiTags('Travels')
@Controller('travels')
export class TravelController{
    constructor(private readonly travelService: TravelService, private readonly invoiceService: InvoiceService){}
    
    @Get()
    @ApiOperation({ summary: 'Servicio para obtener todos los viajes' })
    async getAllTravels( @Res() response: Response ): Promise<any>{
        try{
            const result = await this.travelService.getAllAvailableTravels()
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
    @ApiOperation({ summary: 'Servicio para crear un nuevo viaje' })
    async postTravel( @Body() postData: TravelsDTO, @Res() response: Response ): Promise<any>{
        try{
            const result = await this.travelService.createTravel(postData);
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
    @ApiOperation({ summary: 'Servicio para obtener un viaje especifico por id' })
    async getTravel(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        try{
            const result = await this.travelService.getTravel(id);
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 404); 
        }
    }

    @Put(":id/complete")
    @ApiOperation({ summary: 'Servicio para completar un viaje y tambien genera la factura' })
    async completeTravel(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        try{
            this.invoiceService.createInvoice(id)
            const result = await this.travelService.completeTravel(id);
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