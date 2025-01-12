import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Service/register.service';
import { Users } from 'src/app/classes/Users';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
    console.log("work register");
  }
  constructor(private useService: RegisterService, public r: Router, private _formBuilder: FormBuilder) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  user: Users = new Users();

  onSubmit() {
    console.log(this.user);

    const userData = {
      id: 0,
      lastName: this.user.lastName,
      firstName: this.user.firstName,
      phone: this.user.phone,
      email: this.user.email,
      password: this.user.password,
      firstAidCertificate: true
    };
    console.log(userData);
    debugger
    this.useService.addUser(userData).subscribe(
      succ => {
        this.user = succ

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "התחברת בהצלחה למערכת"
        });

        //שמירת המשתמש הנוכחי
        sessionStorage.setItem('email', userData.email!)
        var s = sessionStorage.getItem('email')
        console.log("ema", s);

        sessionStorage.setItem('pass', userData.password!)
        var t = sessionStorage.getItem('pass')
        console.log("pass=", t);

        sessionStorage.setItem('name', userData.firstName!)
        var name = sessionStorage.getItem('name')
        console.log("name==", name);

        sessionStorage.setItem('lastName', userData.lastName!)
        var lastName = sessionStorage.getItem('lastName')
        console.log("lastName==", lastName);

        sessionStorage.setItem('phone', userData.phone!)
        var phone = sessionStorage.getItem('phone')
        console.log("phone==", phone);
        //id
        sessionStorage.setItem('id', String(userData.id!))
        var id = sessionStorage.getItem('id')
        console.log("id use = ", id);

        //fullName
        sessionStorage.setItem('fullName', userData.firstName + " " + userData.lastName)
        var full = sessionStorage.getItem('fullName')
        console.log("fullllllllllllllll=======", full);
        debugger
        this.user = succ;
        console.log(this.user);
        this.r.navigate([`./AllTrip`])

      },
      err => {
        console.log(err);
        alert("לא הכנסת את כל הפרטים או פרטים לא תקינים")

        console.log('לא נוסף למערכת');

      }
    )

  }

}
