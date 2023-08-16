import { drivers, passengers } from "./dummy";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
    await prisma.drivers.createMany({data: drivers});
    await prisma.passengers.createMany({data: passengers});
}

main().catch(e=>{
    console.log(e);
    process.exit(1)
}).finally(()=>{
    prisma.$disconnect();
})