import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from '../classes/Users';
import { Trips } from '../classes/Trips';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {

  constructor(public h: HttpClient) { }
  private subUser = new Subject<any>();
  getAllUser(): Observable<Array<Users>> {
    return this.h.get<Array<Users>>("https://localhost:7222/AllUser")
  }

  updateUser(user: Users): Observable<Users> {
    debugger
    console.log(user);
    console.log(this.h.put<Users>("https://localhost:7222/api/User", user));
    return this.h.put<Users>("https://localhost:7222/api/User", user)

  }
  deleteUser(id: number) {
    debugger
    console.log(id);
    return this.h.delete(`https://localhost:7222/api/User?id=${id}`)
  }
  getTripForUser(id: number): Observable<Array<Trips>> {
    debugger
    return this.h.get<Array<Trips>>(`https://localhost:7222/GetInv?id=${id}`)
  }
  setIsUser(isUser: boolean) {
    this.subUser.next(isUser)
  }
  afterUser(): Observable<boolean> {
    return this.subUser.asObservable()
  }
  allTripForUser(id: number): Observable<Array<Trips>> {
    return this.h.get<Array<Trips>>(`https://localhost:7222/AllTrip?id${id}`)

  }
}
