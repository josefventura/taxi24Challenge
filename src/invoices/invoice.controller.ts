import { Body, Get, Param, Post, Put, Controller, Res } from "@nestjs/common";
import { Invoice } from "./invoice.model";
import { InvoiceService } from "./invoice.service";
import {  Response } from "express";

@Controller('api/v1/invoices')
export class InvoiceController{

    constructor(private readonly invoiceService: InvoiceService){}
    
    @Get()
    async getAllInvoices( @Res() response: Response ): Promise<any>{
        const result = await this.invoiceService.getAllInvoices()
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Post()
    async postInvoice( @Body() postData: Invoice, @Res() response: Response ): Promise<any>{
        const result = await this.invoiceService.createInvoice(postData);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Get(":id")
    async getInvoice(@Param('id') id:number, @Res() response: Response): Promise<any | null>{
        const result = await this.invoiceService.getInvoice(id);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

    @Put(":id")
    async updateInvoice(@Param('id') id:number, @Body() data: Invoice, @Res() response: Response): Promise<any>{
        const result =  await this.invoiceService.updateInvoice(id, data);
        return response.status(200).json({
            status: "Success!",
            message: "Data obtenida correctamente!",
            result: result
        })
    }

}