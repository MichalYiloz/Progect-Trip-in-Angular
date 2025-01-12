import { Time } from "@angular/common";

export class Trips {
    constructor(
        public idTrip?: number,
        public idKind?: number,
        public targetTrip?: string,
        public typeKind?: number,
        public dateTrip?: Date,
        public leavingTime?: Time,
        public durationInHours?: Time,
        public numPlaceEmpty?: string, // STRING  SQL עשיתי ב 
        public price?: number,
        public image?: string
    ) {

    }
}
