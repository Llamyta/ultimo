import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import { CitasHospitalesInterface } from '../models/citasHopitales';


@Injectable({
  providedIn: 'root'
})
export class CitasHospitalService {

  private registroCitasCollection: AngularFirestoreCollection<CitasHospitalesInterface>;
  private CitasRegistro: Observable<CitasHospitalesInterface[]>;
  private resgistroCitasDOC: AngularFirestoreDocument<CitasHospitalesInterface>;
  private RegistroCitasObservable: Observable<CitasHospitalesInterface>;
  public seleccionarCitasRegistro: CitasHospitalesInterface = {};  

  constructor(private firebase: AngularFirestore) {    
    this.registroCitasCollection = firebase.collection<CitasHospitalesInterface>('CitasHospital');
    this.CitasRegistro = this.registroCitasCollection.valueChanges();
   }

   obtenerCitasRegistro(){
     return this.CitasRegistro = this.registroCitasCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as CitasHospitalesInterface;
         data.id = action.payload.doc.id;
         return data;
       })
     }))
   }

   agregarCitasRegistro(CitasRegistro: any){
      this.registroCitasCollection.add(CitasRegistro);
   }

   actualizarCitasRegistro(CitasRegistro: CitasHospitalesInterface): void {
     let idCitasRegistro = CitasRegistro.id;
     console.log(idCitasRegistro);
     
     this.resgistroCitasDOC = this.firebase.doc<CitasHospitalesInterface>(`CitasHospital/${idCitasRegistro}`);
     this.resgistroCitasDOC.update(CitasRegistro);
   }

   borrarCitasRegistro(idCitasRegistro: string): void {
     this.resgistroCitasDOC = this.firebase.doc<CitasHospitalesInterface>(`CitasHospital/${idCitasRegistro}`);
     this.resgistroCitasDOC.delete();
   }   
}
