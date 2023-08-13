import { $Enums, Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime/library";


export class Invoice implements Prisma.invoiceCreateInput{
    travel_price?: string | number | Prisma.Decimal | DecimalJsLike;
    travels?: Prisma.travelsCreateNestedOneWithoutInvoiceInput;
    taxes?: string | number | Prisma.Decimal | DecimalJsLike;
    total?: string | number | Prisma.Decimal | DecimalJsLike;
    status?: $Enums.status;
}