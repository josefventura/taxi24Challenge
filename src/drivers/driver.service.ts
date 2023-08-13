import { PrismaService } from "src/prisma.service";
import { Driver } from "./driver.model";


export class DriverService{
    constructor(){}
     prisma = new PrismaService();

    async getAllDrivers(): Promise<Driver[]>{
        return  this.prisma.drivers.findMany();
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
            data:{ fullname: data.fullname, current_location: data.current_location, registration_number: data.registration_number, status: data.status, modified_at: new Date}
        })
    }
}