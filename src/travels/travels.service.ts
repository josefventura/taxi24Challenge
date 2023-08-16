import { PrismaService } from "src/prisma.service";
import { Travels } from "./travels.model";


export class TravelService{
    constructor(){}
     prisma = new PrismaService();

    async getAllAvailableTravels(): Promise<Travels[]>{
        return  this.prisma.travels.findMany({where:{is_active:true}});
    }
    
    async getTravel(id:number): Promise<Travels | null>{
        return this.prisma.travels.findUnique({where:{id:Number(id)}})
    }
    
    async createTravel(data: Travels): Promise<Travels>{
        return this.prisma.travels.create({
            data: {
                ...data,
                travel_status: "inprocess"
            }
        })
    }

    async updateTravel(id:number,data:Travels): Promise<Travels>{

        return this.prisma.travels.update({
            where:{id: Number(id)},
            data:{ is_active: data.is_active}
        })
    }
}