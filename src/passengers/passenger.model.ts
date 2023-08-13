import { $Enums } from '.prisma/client';
import { Prisma } from '@prisma/client';


export class Passenger implements Prisma.passengersCreateInput {
    id: number;
    fullname?: string;
    current_location?: string;
    status?: $Enums.status;
    created_at?: string | Date;
    modified_at?: string | Date;
    travels?: Prisma.travelsCreateNestedManyWithoutDriversInput;
}
