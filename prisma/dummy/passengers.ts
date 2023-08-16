import { passengers as Passenger } from "@prisma/client"


export const passengers = [
  {
    fullname: 'roberto carlos',
    lat: 18.488421,
    lng: -69.900387,
    is_active: true,
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'Alberta juana',
    lat: 18.481410,
    lng: -69.931189,
    is_active: true,
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'jessica contreras',
    lat: 18.576618,
    lng: -69.899592,
    is_active: true,
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'luffy maldonado',
    lat: 18.511173,
    lng: -69.796168,
    is_active: false,
    created_at:new Date,
    modified_at:new Date,
  }
] as Passenger[]
