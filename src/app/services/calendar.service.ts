import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CalendarService  {

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>('api/events.json');
  }
}