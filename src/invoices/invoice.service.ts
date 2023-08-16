import { PrismaService } from "src/prisma.service";
import { Invoice } from "./invoice.model";

"lat,long"
export class InvoiceService{
    constructor(){}
     prisma = new PrismaService();

    async getAllInvoices(): Promise<Invoice[]>{
        return  this.prisma.invoice.findMany();
    }
    
    async getInvoice(id:number): Promise<Invoice | null>{
        return this.prisma.invoice.findUnique({where:{id:Number(id)}})
    }
    
    async createInvoice(travelId: number): Promise<Invoice>{
        const { distance } = await this.prisma.travels.findUnique({where:{id:Number(travelId)}});;
        const travelPrice = Number(distance) * 25
        const taxes = travelPrice *0.18;
        const totalPrice = taxes + travelPrice;
        
        return this.prisma.invoice.create({
            data:{
                travel_id: Number(travelId),
                travel_price: travelPrice,
                taxes: taxes,
                total: totalPrice,
                is_active: true,
             }
        });
    }

    async updateInvoice(id:number,data:Invoice): Promise<Invoice>{
        return this.prisma.invoice.update({
            where:{id: Number(id)},
            data:{ is_active: data.is_active}
        })
    }
}