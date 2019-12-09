import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import { SolicitudOrganosInterface } from '../models/SolicitudOrganos';


@Injectable({
  providedIn: 'root'
})
export class SolicitudOrganosService {

  private SolicitudORganosCollection: AngularFirestoreCollection<SolicitudOrganosInterface>;
  private SolicitudOrganos: Observable<SolicitudOrganosInterface[]>;
  private SolicitudOrganosDOC: AngularFirestoreDocument<SolicitudOrganosInterface>;
  private SolicitudOrganosObservable: Observable<SolicitudOrganosInterface>;
  public seleccionarSolicitudOrganos: SolicitudOrganosInterface = {};

  constructor(private firebase: AngularFirestore) {    
    this.SolicitudORganosCollection = firebase.collection<SolicitudOrganosInterface>('SolicitudOrganos');
    this.SolicitudOrganos = this.SolicitudORganosCollection.valueChanges();
   }

   obtenerSolicitudOrganos(){
     return this.SolicitudOrganos = this.SolicitudORganosCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as SolicitudOrganosInterface;
         data.id = action.payload.doc.id;
         return data;
       })
     }))
   }

   agregarSolicitudOrganos(SolicitudOrganos: SolicitudOrganosInterface){
      this.SolicitudORganosCollection.add(SolicitudOrganos);
   }

   actualizarSolicitudOrganos(SolicitudOrganos: SolicitudOrganosInterface): void {
     let idSolicitudOrganos = SolicitudOrganos.id;
     console.log(idSolicitudOrganos);
     
     this.SolicitudOrganosDOC = this.firebase.doc<SolicitudOrganosInterface>(`SolicitudOrganos/${idSolicitudOrganos}`);
     this.SolicitudOrganosDOC.update(SolicitudOrganos);
   }

   borrarSolicitudOrganos(idSolicitudOrganos: string): void {
     this.SolicitudOrganosDOC = this.firebase.doc<SolicitudOrganosInterface>(`SolicitudOrganos/${idSolicitudOrganos}`);
     this.SolicitudOrganosDOC.delete();
   }
}
