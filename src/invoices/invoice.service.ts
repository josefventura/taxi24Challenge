import { PrismaService } from "src/prisma.service";
import { Invoice } from "./invoice.model";
import { getDistance } from "src/utils/location.functions";

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
        const {to, from} = await this.prisma.travels.findUnique({where:{id:Number(travelId)}});
        const [lat, lng] = to.split(",");
        const [lat2, lng2] = from.split(",");
        const travelPrice = getDistance( Number(lat), Number(lng), Number(lat2), Number(lng2)) * 25
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
        //check up how to update right the data
        return this.prisma.invoice.update({
            where:{id: Number(id)},
            data:{ is_active: data.is_active}
        })
    }
}