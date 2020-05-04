import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: "root"
})
export class CalendarService  {

  constructor(private db: AngularFirestore) {}

  getData(): Observable<any[]> {
    return this.db.collection('CitasPersonales').valueChanges().pipe(
      tap(events=> console.log(events)),
      map(events=> events.map(event=> {
        let data:any = event;
        data.start = data.start.toDate();             
        return data;
      }))
    );
  }
  getDataH(): Observable<any[]> {
    return this.db.collection('CitasHospital').valueChanges().pipe(
      tap(events=> console.log(events)),
      map(events=> events.map(event=> {
        let data:any = event;
        data.start = data.start.toDate();             
        return data;
      }))
    );
  }
}