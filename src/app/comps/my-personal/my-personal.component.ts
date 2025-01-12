import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AllTripService } from 'src/app/Service/all-trip.service';
import { AllUserService } from 'src/app/Service/all-user.service';
import { InvitationService } from 'src/app/Service/invitation.service';
import { LoginServiceService } from 'src/app/Service/login-service.service';
import { Trip_kind } from 'src/app/classes/Trip_kind';
import { Trips } from 'src/app/classes/Trips';
import { Users } from 'src/app/classes/Users';
import Swal from 'sweetalert2'

// or via CommonJS
@Component({
  selector: 'app-my-personal',
  templateUrl: './my-personal.component.html',
  styleUrls: ['./my-personal.component.css']
})
export class MyPersonalComponent implements OnInit {

  user: Users = new Users

  ngOnInit() {
    console.log("user==", this.user);
    debugger
    const userData = {
      email: this.email,
      password: this.pass
    };
    this.useIdPass.getByMailPass(userData.email!, userData.password!).subscribe(//לשלוח פרמטר נכון
      succ => {
        debugger
        if (succ == null) {
          console.log("null user!!!! in my personal");
        }
        else {



          console.log("succ", succ);


          this.user = succ;
          debugger
          //הצגת הטיולים שהמשתמש נרשם אליהם
          this.useSer.allTripForUser(this.user.idUse!).subscribe(

            succ => {
              debugger
              console.log(succ);
              this.listMyTrip = succ
              console.log("list = ", this.listMyTrip);

            },
            err => {
              debugger
              console.log(err);

            }
          )
          console.log(this.user);
          console.log("succ in personal");
          console.log(this.user.idUse);
        }
      },
      err => {
        debugger
        console.log(err);
        console.log('not found user')
      }
    )
  }
  m = localStorage.getItem('Maneger')
  //user  צריך להיות שווה למשתמש של הסשין באון אינית
  // c = sessionStorage.getItem('current') || '{}'
  pass = sessionStorage.getItem('pass')
  email = sessionStorage.getItem('email')

  //עריכת פרטים אישיים
  onSubmit() {
    this.useSer.updateUser(this.user).subscribe(
      succ => {
        debugger

        console.log("this.user == ", this.user);
        console.log("succ in update user===", succ);
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        debugger
        sessionStorage.setItem('pass', this.user.password!);
        sessionStorage.setItem('email', this.user.email!);
        sessionStorage.setItem('name', this.user.firstName!);
        sessionStorage.setItem('lastName', this.user.password!);
        sessionStorage.setItem('id', String(this.user.idUse!));
        sessionStorage.setItem('phone', this.user.phone!);
        sessionStorage.setItem('fullName', this.user.firstName + " " + this.user.lastName);




      },
      err => {
        console.log(err);

      }
    )
  }

  deleteMe() {
    this.useSer.deleteUser(this.user.idUse!).subscribe(
      succ => {
        if (succ == true) {
          debugger
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
          debugger
          console.log("succ===", succ);
        }
        else {
          debugger
          alert("יש לך הזמנות במערכת לא תוכל להמחק")
        }
      },
      err => {
        debugger
        console.log(err);

      }
    )
  }

  constructor(private _formBuilder: FormBuilder, private useSer: AllUserService, private useIdPass: LoginServiceService, public invSer: InvitationService, public tripSer: AllTripService) { }
  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });

  listMyTrip: Array<Trips> = new Array<Trips>()
  Mytrip: Array<Trips> = new Array<Trips>();
  p = sessionStorage.getItem('pass')
  id = sessionStorage.getItem('id')

  allMyTrip() {
    this.invSer.getTripToUser(Number(this.id)).subscribe(
      succ => {
        debugger
        this.allTrips = succ
        console.log("allTrips=", this.allTrips);

        this.Mytrip = succ
        console.log("Mytrip=", this.Mytrip);

        console.log("succ trip to user", succ);

        this.tripSer.getAllTripKind().subscribe(
          succKind => {
            debugger
            this.listTripKind = succKind;
            console.log(this.listTripKind);
          },
          errKind => {
            debugger
            console.log(errKind);
          }
        )

      },
      err => {
        debugger
        alert("אין לך עדין טיולים")
        console.log(err);

      }

    )

  }
  listTrip: Array<Trips> = new Array<Trips>()
  listTripKind: Array<Trip_kind> = new Array<Trip_kind>();

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

}
