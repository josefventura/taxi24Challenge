import { PrismaService } from "src/prisma.service";
import { Passenger } from "./passenger.model";
import { Driver } from "src/drivers/driver.model";
import nearbySort from "src/utils/location.functions";




export class PassengerService{
    constructor(){}
     prisma = new PrismaService();

    async getAllPassengers(): Promise<Passenger[]>{
        return  this.prisma.passengers.findMany();
    }

    async getNearestDrivers(lat:number, lng:number): Promise<Driver[]>{
        const drivers = await this.prisma.drivers.findMany({where:{is_active:true}});

        const driversDic = {}
        const findDrivers = []

        for(const driver of drivers) {
            driversDic[driver.id] = driver
            findDrivers.push({name: driver.id, lat: driver.lat, long: driver.lng})
        }

        const nearestDrivers = await nearbySort({lat, lng}, findDrivers);
        
        return nearestDrivers.slice(0,3).map(d => driversDic[d.name]);
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