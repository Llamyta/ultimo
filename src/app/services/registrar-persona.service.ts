import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import { PersonaRegistradaInterface } from '../models/persona_registrada';

@Injectable({
  providedIn: 'root'
})
export class RegistrarPersonaService {

  private RegistrarPersonaCollection: AngularFirestoreCollection<PersonaRegistradaInterface>;
  private RegistrarPersona: Observable<PersonaRegistradaInterface[]>;
  private RegistrarPersonaDOC: AngularFirestoreDocument<PersonaRegistradaInterface>;
  private RegistrarPersonaObservable: Observable<PersonaRegistradaInterface>;
  public seleccionarRegistrarPersona: PersonaRegistradaInterface = {};

  constructor(private firebase: AngularFirestore) {    
    this.RegistrarPersonaCollection = firebase.collection<PersonaRegistradaInterface>('RegistrarPersona');
    this.RegistrarPersona = this.RegistrarPersonaCollection.valueChanges();
   }

   obtenerRegistrarPersona(){
     return this.RegistrarPersona = this.RegistrarPersonaCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as PersonaRegistradaInterface;
         data.id = action.payload.doc.id;
         return data;
       })
     }))
   }

   agregarRegistrarPersona(RegistrarPersona: PersonaRegistradaInterface){
      this.RegistrarPersonaCollection.add(RegistrarPersona);
   }

   actualizarRegistrarPersona(RegistrarPersona: PersonaRegistradaInterface): void {
     let idRegistrarPersona = RegistrarPersona.id;
     console.log(idRegistrarPersona);
     
     this.RegistrarPersonaDOC = this.firebase.doc<PersonaRegistradaInterface>(`RegistrarPersona/${idRegistrarPersona}`);
     this.RegistrarPersonaDOC.update(RegistrarPersona);
   }

   borrarRegistrarPersona(idRegistrarPersona: string): void {
     this.RegistrarPersonaDOC = this.firebase.doc<PersonaRegistradaInterface>(`RegistrarPersona/${idRegistrarPersona}`);
     this.RegistrarPersonaDOC.delete();
   }
}
