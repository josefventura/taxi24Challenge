import { PrismaService } from "src/prisma.service";
import { Passenger } from "./passenger.model";


export class PassengerService{
    constructor(){}
     prisma = new PrismaService();

    async getAllPassengers(): Promise<Passenger[]>{
        return  this.prisma.passengers.findMany();
    }
    
    async getPassenger(id:number): Promise<Passenger | null>{
        return this.prisma.passengers.findUnique({where:{id:Number(id)}})
    }
    
    async createPassenger(data: Passenger): Promise<Passenger>{
        return this.prisma.passengers.create({
            data
        })
    }

    async updatePassenger(id:number,data:Passenger): Promise<Passenger>{
        return this.prisma.passengers.update({
            where:{id: Number(id)},
            data:{ fullname: data.fullname, lat: data.lat, lng: data.lng, is_active: data.is_active, modified_at: new Date}
        })
    }
}