import { PrismaService } from "src/prisma.service";
import { Invoice } from "./invoice.model";


export class InvoiceService{
    constructor(){}
     prisma = new PrismaService();

    async getAllInvoices(): Promise<Invoice[]>{
        return  this.prisma.invoice.findMany();
    }
    
    async getInvoice(id:number): Promise<Invoice | null>{
        return this.prisma.invoice.findUnique({where:{id:Number(id)}})
    }
    
    async createInvoice(data: Invoice): Promise<Invoice>{
        return this.prisma.invoice.create({
            data
        })
    }

    async updateInvoice(id:number,data:Invoice): Promise<Invoice>{
        //check up how to update right the data
        return this.prisma.invoice.update({
            where:{id: Number(id)},
            data:{ status: data.status}
        })
    }
}