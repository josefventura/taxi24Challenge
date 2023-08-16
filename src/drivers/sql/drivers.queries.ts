import { PrismaService } from "src/prisma.service";
import { Driver } from "../driver.model";

export const generateQueryKm = async(lat: number, lng: number, prisma: PrismaService, km: number): Promise<Driver[]> =>{
    return  prisma.$queryRaw`SELECT *
    FROM drivers
    WHERE is_active = true AND (6371 * 2 * ATAN2(SQRT(POW(SIN(RADIANS(lat - ${lat}) / 2), 2) +
                            COS(RADIANS(${lat})) * COS(RADIANS(lat)) *
                            POW(SIN(RADIANS(lng - ${lng}) / 2), 2)),
        SQRT(1 - POW(SIN(RADIANS(lat - ${lat}) / 2), 2) +
                COS(RADIANS(${lat})) * COS(RADIANS(lat)) *
                POW(SIN(RADIANS(lng - ${lng}) / 2), 2)))) <= ${km} `;
}