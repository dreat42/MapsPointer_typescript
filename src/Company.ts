import { faker } from '@faker-js/faker'

export default class Company {

    company_name:string;

    location:{
        lat:number,
        lng:number
    }


    constructor(){

        this.company_name=faker.company.name();

        this.location={
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }

    }
}