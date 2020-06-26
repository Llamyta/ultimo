import { HospitalesInterface } from './../models/hospitales';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  private registroHospitalCollection: AngularFirestoreCollection<HospitalesInterface>;
  private HospitalRegistro: Observable<HospitalesInterface[]>;
  private registroHospitalDOC: AngularFirestoreDocument<HospitalesInterface>;
  private RegistroHospitalObservable: Observable<HospitalesInterface>;
  public seleccionarHospitales: HospitalesInterface = {};

  constructor(private firebase: AngularFirestore) {    
    this.registroHospitalCollection = firebase.collection<HospitalesInterface>('Hospital');
    this.HospitalRegistro = this.registroHospitalCollection.valueChanges();
   }

   obtenerHospitalRegistro(){
     return this.HospitalRegistro = this.registroHospitalCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as HospitalesInterface;
         data.id = action.payload.doc.id;
         return data;
       })
     }))
   }

   

   agregarHospitalRegistro(HospitalRegistro: HospitalesInterface){
      this.registroHospitalCollection.add(HospitalRegistro);
   }

   actualizarHospitalRegistro(HospitalRegistro: HospitalesInterface): void {
     let idHospitalRegistro = HospitalRegistro.id;
     console.log(idHospitalRegistro);
     
     this.registroHospitalDOC = this.firebase.doc<HospitalesInterface>(`Hospital/${idHospitalRegistro}`);
     this.registroHospitalDOC.update(HospitalRegistro);
   }

   borrarHospitalRegistro(idHospitalRegistro: string): void {
     this.registroHospitalDOC = this.firebase.doc<HospitalesInterface>(`Hospital/${idHospitalRegistro}`);
     this.registroHospitalDOC.delete();
   }
}
