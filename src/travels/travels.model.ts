import { travels } from "@prisma/client";

export type Travels = travels;

type Coordinates = {
    lat: number,
    lng: number
}

export type TravelsDTO = {
    "passenger_id":     number,
    "driver_id":        number,
    "from":             Coordinates,
    "to":               Coordinates,
}
