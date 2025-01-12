import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Service/login-service.service';
import { Users } from 'src/app/classes/Users';
import Swal from 'sweetalert2'

// or via CommonJS
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUserLogin: boolean = false
  ngOnInit(): void {
    console.log("work login!!!!");

  }
  constructor(private _formBuilder: FormBuilder, private useService: LoginServiceService, public r: Router) { }

  user: Users = new Users();

  onSubmit() {

    console.log("user==", this.user);
    debugger
    const userData = {
      email: this.user.email,
      password: this.user.password
    };
    this.useService.getByMailPass(userData.email!, userData.password!).subscribe(
      succ => {
        debugger
        if (succ == null) {
          this.r.navigate([`./Register`])
        }
        else {
          debugger
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
          this.user = succ
          console.log("user         ---------", this.user);

          //שמירת המשתמש הנוכחי
          sessionStorage.setItem('email', this.user.email!)
          var s = sessionStorage.getItem('email')
          console.log("ema==", s);

          sessionStorage.setItem('pass', this.user.password!)
          var t = sessionStorage.getItem('pass')
          console.log("pass=", t);

          //id
          sessionStorage.setItem('id', String(this.user.idUse!))
          var id = sessionStorage.getItem('id')
          console.log("id use = ", id);



          sessionStorage.setItem('name', this.user.firstName!)
          var name = sessionStorage.getItem('name')
          console.log("name==", name);

          sessionStorage.setItem('lastName', this.user.lastName!)
          var lastName = sessionStorage.getItem('lastName')
          console.log("lastName==", lastName);

          //fullName
          sessionStorage.setItem('fullName', this.user.firstName + " " + this.user.lastName)
          var full = sessionStorage.getItem('fullName')
          console.log("fullllllllllllllll=======", full);


          sessionStorage.setItem('phone', this.user.phone!)
          var phone = sessionStorage.getItem('phone')
          console.log("phone==", phone);


          this.r.navigate([`./Home`])
          console.log("succ", succ);

          debugger
          this.user = succ;
          console.log(this.user);

        }
      },

      err => {
        console.log(err);
        console.log('not found user')
        this.r.navigate([`./Register`])
      }

    )

  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}
