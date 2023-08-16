import { drivers as Driver } from "@prisma/client";

export const drivers = [
  {
    fullname: 'juan jose alberto',
    lat: 18.488421,
    lng:-69.900687,
    registration_number: 'AA123CC',
    is_active: true,
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'michael felps',
    lat: 18.481410,
    lng:-69.931089,
    registration_number: 'AA124DD',
    is_active: true,
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'roberto contreras',
    lat: 18.576698,
    lng: -69.899592,
    registration_number: 'AA123FF',
    is_active: true,
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'felix maldonado',
    lat: 18.511273,
    lng: -69.796268,
    registration_number: 'AA123FF',
    is_active: false,
    created_at:new Date,
    modified_at:new Date,
  }
] as Driver[]
