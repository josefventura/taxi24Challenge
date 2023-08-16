import { PrismaService } from "src/prisma.service";
import { Driver } from "./driver.model";
import { generateQueryKm } from "./sql/drivers.queries";
// import { generateQuerKm } from "./sql/drivers";
// import { Prisma } from "@prisma/client";


export class DriverService{
    constructor(){}
     prisma = new PrismaService();

    async getAllDrivers(): Promise<Driver[]>{
        return  this.prisma.drivers.findMany();
    }

    async getNearbyDrivers(lat: number, lng: number): Promise<Driver[]>{
        return generateQueryKm(lat, lng, this.prisma, 3);
    }
    
    async getAllAvailableDrivers(): Promise<Driver[]>{
        return  this.prisma.drivers.findMany({where:{is_active:true}});
    }
    
    async getDriver(id:number): Promise<Driver | null>{
        return this.prisma.drivers.findUnique({where:{id:Number(id)}})
    }
    
    async createDriver(data: Driver): Promise<Driver>{
        return this.prisma.drivers.create({
            data
        })
    }

    async updateDriver(id:number,data:Driver): Promise<Driver>{
        return this.prisma.drivers.update({
            where:{id: Number(id)},
            data:{ fullname: data.fullname, lat: data.lat, lng: data.lng, registration_number: data.registration_number, is_active: data.is_active, modified_at: new Date}
        })
    }
}