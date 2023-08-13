import { $Enums } from '.prisma/client';
import { Prisma } from '@prisma/client';


export class Driver implements Prisma.driversCreateInput {
    id: number;
    fullname?: string;
    current_location?: string;
    registration_number?: string;
    status?: $Enums.status;
    created_at?: string | Date;
    modified_at?: string | Date;
    travels?: Prisma.travelsCreateNestedManyWithoutDriversInput;
}
