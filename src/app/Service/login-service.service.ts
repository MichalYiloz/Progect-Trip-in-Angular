import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../classes/Users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(public h: HttpClient) { }
  basicUtl: string = "https://localhost:7222/api/User/"
  getByMailPass(email: string, password: string): Observable<Users> {
    debugger
    return this.h.get<Users>(`https://localhost:7222/api/User?e=${email}&p=${password}`)

  }
}
