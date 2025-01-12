import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AllTripService } from 'src/app/Service/all-trip.service';
import { InvitationService } from 'src/app/Service/invitation.service';
import { Invitation_place } from 'src/app/classes/Invitation_place';
import { Trips } from 'src/app/classes/Trips';
import { Users } from 'src/app/classes/Users';
import Swal from 'sweetalert2'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(public ar: ActivatedRoute, public tripIdSer: AllTripService, private location: Location, public invSer: InvitationService, public dialog: MatDialog) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  booking: Invitation_place = new Invitation_place();
  tripDto: Trips = new Trips();
  Mytrip: Array<Trips> = new Array<Trips>();
  User: Users = new Users();
  storedValue: any
  idUse = sessionStorage.getItem('id')
  p = sessionStorage.getItem('pass')
  full = sessionStorage.getItem('fullName')
  fullNames = sessionStorage.getItem('name' + 'lastName')
  goBack() {
    this.location.back();

    console.log('goBack()...');
  }
  longText = `צריך לכתוב כאן משהו???`;
  ngOnInit(): void {


    const trip = Number(this.ar.snapshot.paramMap.get('i'))
    debugger

    this.tripIdSer.getTripById(trip)
      .subscribe(
        succ => {
          debugger
          this.tripDto = succ
          console.log(this.tripDto);
        },
        err => {
          debugger
          console.log(err);

        }
      )
  }
  //הזמנת מקומות
  submit(selectedTrip: any) {
    this.storedValue = sessionStorage.getItem('pass')
    debugger

    this.booking.idInvitation = 0,
      this.booking.idUse = Number(this.idUse),
      this.booking.FullName = String(this.full),
      this.booking.dateInvitation = "2025-02-05T13:36:47.360Z",
      this.booking.idTrip = selectedTrip.idTrip,
      this.booking.TargetTrip = this.tripDto.targetTrip,
      console.log(this.tripDto.targetTrip);
    this.booking.DateTrip = "2026-02-05T13:36:47.360Z",
      this.booking.numPlace = 0

    this.invSer.addInv(this.booking).subscribe(
      succ => {
        debugger
        Swal.fire({
          title: " הזמנתך נקלטה בהצלחה הנאה מרובה!",
          text: "לחץ על הכפתור",
          icon: "success"
        });
        console.log("succ inva add", succ);

      },
      err => {
        debugger
        console.log(this.booking);

        console.log(err);

      }
    )

  }


}
