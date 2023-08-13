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
            data:{ fullname: data.fullname, current_location: data.current_location, status: data.status, modified_at: new Date}
        })
    }
}