import { Time } from "@angular/common";

export class Invitation_place {
    constructor(
        public idInvitation?: number,
        public idUse?: number,
        public FullName?: string,
        public dateInvitation?: string,
        // public hourInvitation?:string ,
        public idTrip?: number,
        public TargetTrip?: string,
        public DateTrip?: string,
        public numPlace?: number
    ) {

    }
}
