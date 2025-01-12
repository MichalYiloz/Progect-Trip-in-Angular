import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invitation_place } from '../classes/Invitation_place';
import { Observable } from 'rxjs';
import { Trips } from '../classes/Trips';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(public h: HttpClient) { }
  //allTrip
  addInv(inv: Invitation_place) {
    debugger
    return this.h.post(`https://localhost:7222/api/InvitationPlace`, inv);
  }

  //באזור האישי הטיולים שנרשמתי אליהם
  getTripToUser(id: number): Observable<Array<Trips>> {
    return this.h.get<Array<Trips>>(`https://localhost:7222/AllTrip?id=${id}`)
  }
  deleteBooking(id: Number) {
    return this.h.delete(`https://localhost:7222/api/InvitationPlace?id=${id}`)
  }
}
