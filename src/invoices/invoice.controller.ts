import {  Get, Param, Controller, Res, HttpException } from "@nestjs/common";
import { InvoiceService } from "./invoice.service";
import {  Response } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Invoices')
@Controller('invoices')
export class InvoiceController{

    constructor(private readonly invoiceService: InvoiceService){}
    
    @Get()
    @ApiOperation({ summary: 'Servicio para obtener las facturas' })
    async getAllInvoices( @Res() response: Response ): Promise<any>{
        try{
            const result = await this.invoiceService.getAllInvoices()
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 400); 
        }
    }

    @Get(":id")
    @ApiOperation({ summary: 'Servicio para obtener una factura por id' })
    async getInvoice(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        try{

            const result = await this.invoiceService.getInvoice(id);
            return response.status(200).json({
                status: "Success!",
                message: "Data obtenida correctamente!",
                result: result
            })
        }catch(e){
            throw new HttpException(e.message?? "there was an error", e.statusCode?? 400); 
        }
    }
}