import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trips } from '../classes/Trips';
import { Trip_kind } from '../classes/Trip_kind';

@Injectable({
  providedIn: 'root'
})
export class AllTripService {

  constructor(public h: HttpClient) { }
  getAllTrip(): Observable<Array<Trips>> {
    debugger
    console.log(this.h.get<Array<Trips>>("https://localhost:7222/api/Trip"));

    return this.h.get<Array<Trips>>("https://localhost:7222/api/Trip")
  }
  getAllTripKind(): Observable<Array<Trip_kind>> {
    return this.h.get<Array<Trip_kind>>("https://localhost:7222/api/TripKInd")
  }
  getTripById(id: number): Observable<Trips> {
    debugger
    return this.h.get<Trips>(`https://localhost:7222/getById?id=${id}`);
  }

}
