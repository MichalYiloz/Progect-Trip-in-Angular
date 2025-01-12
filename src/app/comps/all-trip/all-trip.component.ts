import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllTripService } from 'src/app/Service/all-trip.service';
import { Trip_kind } from 'src/app/classes/Trip_kind';
import { Trips } from 'src/app/classes/Trips';
import { Users } from 'src/app/classes/Users';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-all-trip',
  templateUrl: './all-trip.component.html',
  styleUrls: ['./all-trip.component.css']
})
export class AllTripComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  constructor(public tripSer: AllTripService, public r: Router, public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  user: Users = new Users

  m = localStorage.getItem('Maneger') || '{}'
  c = sessionStorage.getItem('email') || '{}'

  ngOnInit() {
    this.tripSer.getAllTrip().subscribe(
      succ => {
        console.log(this.listTrip);
        this.listTrip = succ;
        this.allTrips = this.listTrip;

        console.log(this.listTrip);
        this.tripSer.getAllTripKind().subscribe(
          succKind => {
            this.listTripKind = succKind;
            console.log(this.listTripKind);
          },
          errKind => {
            console.log(errKind);
          }
        )
      },
      err => {
        console.log(err);
      }
    )
    

  }

  allTrips: Array<Trips> = new Array<Trips>()
  filterTrips(event: any) {
    debugger
    this.allTrips = this.listTrip
    const selectedValue = event.source.value;
    var type = this.listTripKind.find(x => x.nameKind === selectedValue);
    var typeId = type?.idKind
    console.log(typeId);
    this.allTrips = this.allTrips.filter(x => x.idKind == type!.idKind)
    console.log(this.allTrips);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  details(i: number | undefined) {
    this.r.navigate([`./Details/${i}`])
  }


  listTrip: Array<Trips> = new Array<Trips>()
  listTripKind: Array<Trip_kind> = new Array<Trip_kind>();
}
