import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginServiceService } from 'src/app/Service/login-service.service';
import { Subscription } from 'rxjs';
import { AllUserService } from 'src/app/Service/all-user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userSub: Subscription;
  userLogin: boolean = false
  constructor(public use: AllUserService) {
    this.userSub = use.afterUser().subscribe(
      value => {
        this.userLogin = value
        console.log(this.userLogin);
        sessionStorage.getItem('name')
      },
      err => {
        console.log(err);

      }
    )
  }
  ngOnInit(): void {

  }
  m = localStorage.getItem('Maneger')
  pass = sessionStorage.getItem('pass')
  email = sessionStorage.getItem('email')
  name = sessionStorage.getItem('name')
  current() {
  }
}