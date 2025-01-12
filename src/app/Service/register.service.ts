import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../classes/Users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public h: HttpClient) { }

  basicUtl: string = "https://localhost:7222/api/User/"

  addUser(user: Users) {
    debugger
    return this.h.post("https://localhost:7222/api/User", user)
  }

}
