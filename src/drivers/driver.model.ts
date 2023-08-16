import { drivers } from "@prisma/client";

export type Driver = drivers

export type DriverDTO = {
    "fullname":               string,
    "lat":                    number,
    "lng":                    number,
    "registration_number":    string,
    "is_active"?:             boolean,
};