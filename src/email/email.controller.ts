import { Body, Controller, HttpException, Post, Res } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import {  Response } from "express";
import { EmailService } from "./email.service";

@ApiTags('Email')
@Controller('email')
export class emailController{
    constructor(private readonly emailService: EmailService){}
    @Post()
    @ApiOperation({ summary: 'Servicio para enviar un corrreo' })
    async postPassenger( @Body() emailBody: {email: string}, @Res() response: Response ): Promise<any>{
        try{
            const result = await this.emailService.sendEmail(emailBody.email);
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