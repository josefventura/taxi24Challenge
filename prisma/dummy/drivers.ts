import { Driver } from "src/drivers/driver.model";

export const drivers = [
  {
    fullname: 'juan jose alberto',
    current_location: '18.488421,-69.900687',
    registration_number: 'AA123CC',
    status: 'active',
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'michael felps',
    current_location: '18.481410,-69.931089',
    registration_number: 'AA124DD',
    status: 'active',
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'roberto contreras',
    current_location: '18.576698,-69.899592',
    registration_number: 'AA123FF',
    status: 'active',
    created_at:new Date,
    modified_at:new Date,
  },
  {
    fullname: 'felix maldonado',
    current_location: '18.511273,-69.796268',
    registration_number: 'AA123FF',
    status: 'inactive',
    created_at:new Date,
    modified_at:new Date,
  }
] as Driver[]
