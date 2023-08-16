import { PrismaService } from "src/prisma.service";
import { Travels, TravelsDTO } from "./travels.model";
import { getDistance } from "src/utils/location.functions";


export class TravelService{
    constructor(){}
     prisma = new PrismaService();

    async getAllAvailableTravels(): Promise<Travels[]>{
        return  this.prisma.travels.findMany({where:{is_active:true}});
    }
    
    async getTravel(id:number): Promise<Travels | null>{
        return this.prisma.travels.findUnique({where:{id:Number(id)}})
    }
    
    async createTravel(data: TravelsDTO): Promise<Travels>{
        const distance = getDistance( data.from.lat, data.from.lng, data.to.lat, data.to.lng);
        return this.prisma.travels.create({
            data: {
                passenger_id: data.passenger_id,
                driver_id: data.driver_id,
                to: `${data.to.lat},${data.to.lng}`,
                from: `${data.from.lat},${data.from.lng}`,
                distance,
                is_active: true,
                travel_status: "inprocess"
            }
        })
    }
    async completeTravel(id: number): Promise<Travels>{
        return this.prisma.travels.update({
            data: {
                travel_status: "completed"
            }, where: {id:Number(id)}
        })
    }

}