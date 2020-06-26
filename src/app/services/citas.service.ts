import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import { CitasInterface } from '../models/citas';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private registroCitasCollection: AngularFirestoreCollection<CitasInterface>;
  private CitasRegistro: Observable<CitasInterface[]>;
  private resgistroCitasDOC: AngularFirestoreDocument<CitasInterface>;
  private RegistroCitasObservable: Observable<CitasInterface>;
  public seleccionarCitasRegistro: CitasInterface = {};  

  constructor(private firebase: AngularFirestore) {    
    this.registroCitasCollection = firebase.collection<CitasInterface>('CitasPersonales');
    this.CitasRegistro = this.registroCitasCollection.valueChanges();
   }

   obtenerCitasRegistro(){
     return this.CitasRegistro = this.registroCitasCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as CitasInterface;
         const id = action.payload.doc.id;
         return {id, ...data};
       })
     }))
   }

   agregarCitasRegistro(CitasRegistro: any){
      this.registroCitasCollection.add(CitasRegistro);
   }

   actualizarCitasRegistro(CitasRegistro: CitasInterface): void {
     let idCitasRegistro = CitasRegistro.id;
     console.log(idCitasRegistro);
     
     this.resgistroCitasDOC = this.firebase.doc<CitasInterface>(`CitasPersonales/${idCitasRegistro}`);
     this.resgistroCitasDOC.update(CitasRegistro);
   }

   borrarCitasRegistro(idCitasRegistro: string): void {
     this.resgistroCitasDOC = this.firebase.doc<CitasInterface>(`CitasPersonales/${idCitasRegistro}`);     
     this.resgistroCitasDOC.delete();
   }   
}
