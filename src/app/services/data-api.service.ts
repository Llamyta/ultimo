import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import { PersonaRegistradaInterface } from '../models/persona_registrada';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private registroPersonaCollection: AngularFirestoreCollection<PersonaRegistradaInterface>;
  private PersonaRegistro: Observable<PersonaRegistradaInterface[]>;
  private resgistroPersonaDOC: AngularFirestoreDocument<PersonaRegistradaInterface>;
  private RegistroPersonaObservable: Observable<PersonaRegistradaInterface>;
  public seleccionarPersonaRegistro: PersonaRegistradaInterface = {};

  constructor(private firebase: AngularFirestore) {    
    this.registroPersonaCollection = firebase.collection<PersonaRegistradaInterface>('Usuario');
    this.PersonaRegistro = this.registroPersonaCollection.valueChanges();
   }

   obtenerPersonaRegistro(){
     return this.PersonaRegistro = this.registroPersonaCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as PersonaRegistradaInterface;
         data.id = action.payload.doc.id;
         return data;
       })
     }))
   }

   agregarPersonaRegistro(PersonaRegistro: PersonaRegistradaInterface){
      this.registroPersonaCollection.add(PersonaRegistro);
   }

   actualizarPersonaRegistro(PersonaRegistro: PersonaRegistradaInterface): void {
     let idPersonaRegistro = PersonaRegistro.id;
     console.log(idPersonaRegistro);
     
     this.resgistroPersonaDOC = this.firebase.doc<PersonaRegistradaInterface>(`Usuario/${idPersonaRegistro}`);
     this.resgistroPersonaDOC.update(PersonaRegistro);
   }

   borrarPersonaRegistro(idPersonaRegistro: string): void {
     this.resgistroPersonaDOC = this.firebase.doc<PersonaRegistradaInterface>(`Usuario/${idPersonaRegistro}`);
     this.resgistroPersonaDOC.delete();
   }
}
