import { passengers } from "@prisma/client";


export type Passenger = passengers

export type PassengerDTO = {
    "fullname":               string,
    "lat":                    number,
    "lng":                    number,
    "is_active"?:             boolean,
};