import { Payload } from './Payload';

export class Astronaut implements Payload {
    massKg : number;
    name : string;

    constructor (mass:number,astronautName:string) {
        this.massKg = mass;
        this.name = astronautName;

    }
}

