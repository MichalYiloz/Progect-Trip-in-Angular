import { Component, OnInit } from '@angular/core';
import { AllTripService } from 'src/app/Service/all-trip.service';
import { InvitationService } from 'src/app/Service/invitation.service';
import { Invitation_place } from 'src/app/classes/Invitation_place';
import { Trips } from 'src/app/classes/Trips';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  value = 'Clear me';
  constructor(public invSer:InvitationService,public trip:AllTripService){}
  ngOnInit(): void {

  }
//   booking:Invitation_place = new Invitation_place();
//   tripDto: Trips = new Trips();
//   storedValue:any
//   p = sessionStorage.getItem('pass')
//   fullNames = sessionStorage.getItem('name'+'lastName')
//   submit(selectedTrip:any){
// this.storedValue = sessionStorage.getItem('pass')
//     debugger
    
//     this.booking.idInvitation= 0,
//       this.booking.idUse=Number(this.p),
//       this.booking.FullName!=this.fullNames,
//       this.booking.dateInvitation="2025-02-05T13:36:47.360Z" ,
//       this.booking.hourInvitation="null",//null 
//       this.booking.idTrip=selectedTrip.idTrip,
//       this.booking.TargetTrip=selectedTrip.TargetTrip,
//       this.booking.DateTrip="2026-02-05T13:36:47.360Z",
//       this.booking.numPlace=0 

//     this.invSer.addInv(this.booking).subscribe(
//       succ=>{
//         debugger
//         console.log("succ inva add",succ);
//        // this.booking = succ
//       },
//       err =>{
//         debugger
//         console.log(err);
        
//       }
//     )

    

    //קריאת שרת 
  }
