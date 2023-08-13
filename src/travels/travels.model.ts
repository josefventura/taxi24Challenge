import { $Enums } from '.prisma/client';
import { Prisma } from '@prisma/client';

export class Travel implements Prisma.travelsCreateInput{
    from?: string;
    to?: string;
    status?: $Enums.status;
    created_at?: string | Date;
    invoice?: Prisma.invoiceCreateNestedManyWithoutTravelsInput;
    drivers?: Prisma.driversCreateNestedOneWithoutTravelsInput;
    passengers?: Prisma.passengersCreateNestedOneWithoutTravelsInput;
}
