import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import { SolicitudSangreInterface } from '../models/SolicitudSangre';


@Injectable({
  providedIn: 'root'
})
export class SolicitudSangreService {

  private SolicitudSangreCollection: AngularFirestoreCollection<SolicitudSangreInterface>;
  private solicitudSangre: Observable<SolicitudSangreInterface[]>;
  private solicitudSangreDOC: AngularFirestoreDocument<SolicitudSangreInterface>;
  private solicitudSangreObservable: Observable<SolicitudSangreInterface>;
  public seleccionarSolicitudSangre: SolicitudSangreInterface = {};

  constructor(private firebase: AngularFirestore) {    
    this.SolicitudSangreCollection = firebase.collection<SolicitudSangreInterface>('SolicitudSangre');
    this.solicitudSangre = this.SolicitudSangreCollection.valueChanges();
   }

   obtenersolicitudSangre(){
     return this.solicitudSangre = this.SolicitudSangreCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as SolicitudSangreInterface;
         data.id = action.payload.doc.id;
         return data;
       })
     }))
   }

   agregarsolicitudSangre(solicitudSangre: SolicitudSangreInterface){
      this.SolicitudSangreCollection.add(solicitudSangre);
   }

   actualizarsolicitudSangre(solicitudSangre: SolicitudSangreInterface): void {
     let idsolicitudSangre = solicitudSangre.id;
     console.log(idsolicitudSangre);
     
     this.solicitudSangreDOC = this.firebase.doc<SolicitudSangreInterface>(`SolicitudSangre/${idsolicitudSangre}`);
     this.solicitudSangreDOC.update(solicitudSangre);
   }

   borrarsolicitudSangre(idsolicitudSangre: string): void {
     this.solicitudSangreDOC = this.firebase.doc<SolicitudSangreInterface>(`SolicitudSangre/${idsolicitudSangre}`);
     this.solicitudSangreDOC.delete();
   }
}
