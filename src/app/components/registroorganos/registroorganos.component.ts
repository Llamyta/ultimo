import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs/internal/Observable";
import { finalize } from "rxjs/operators";
import Swal from 'sweetalert2';
import {SolicitudOrganosService} from '../../services/solicitud-organos.service';

@Component({
  selector: 'app-registroorganos',
  templateUrl: './registroorganos.component.html',
  styleUrls: ['./registroorganos.component.css']
})
export class RegistroorganosComponent implements OnInit {

  @ViewChild("imagenFoto", { static: true }) inputFoto: ElementRef;

  urlFoto: any;
  uploadPercentFoto: Observable<number>;

  constructor(public dataApi:SolicitudOrganosService, private storage:AngularFireStorage) { }

  ngOnInit() {
  }
  onUpload(e, cualEs: string) {
    const id = Math.random()
        .toString(36)
        .substring(2);
      const file = e.target.files[0];
      const filePath = `SolicitudOrganos/SolicitudOrganos${id}`;
      const ref = this.storage.ref(filePath);
      const taks = this.storage.upload(filePath, file);
      this.uploadPercentFoto = taks.percentageChanges();

      taks
        .snapshotChanges()
        .pipe(finalize(() => (this.urlFoto = ref.getDownloadURL())))
        .subscribe();
  }


  guardarSolicitud(form: NgForm) {    
    form.value.foto = this.inputFoto.nativeElement.value;
    this.dataApi.agregarSolicitudOrganos(form.value);    
    form.resetForm();            
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se guardo correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
