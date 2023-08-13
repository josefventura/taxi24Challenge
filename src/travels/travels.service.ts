import { PrismaService } from "src/prisma.service";
import { Travel } from "./travels.model";


export class TravelService{
    constructor(){}
     prisma = new PrismaService();

    async getAllTravels(): Promise<Travel[]>{
        return  this.prisma.travels.findMany();
    }
    
    async getTravel(id:number): Promise<Travel | null>{
        return this.prisma.travels.findUnique({where:{id:Number(id)}})
    }
    
    async createTravel(data: Travel): Promise<Travel>{
        return this.prisma.travels.create({
            data
        })
    }

    async updateTravel(id:number,data:Travel): Promise<Travel>{
        //check up how to update right the data
        return this.prisma.travels.update({
            where:{id: Number(id)},
            data:{ status: data.status}
        })
    }
}