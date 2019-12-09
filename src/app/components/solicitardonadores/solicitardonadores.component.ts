import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SolicitudSangreService } from '../../services/solicitud-sangre.service';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs/internal/Observable";
import { finalize } from "rxjs/operators";
import Swal from 'sweetalert2'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-solicitardonadores',
  templateUrl: './solicitardonadores.component.html',
  styleUrls: ['./solicitardonadores.component.css']
})
export class SolicitardonadoresComponent implements OnInit {

  @ViewChild("imagenFoto", { static: true }) inputFoto: ElementRef;

  urlFoto: any;
  uploadPercentFoto: Observable<number>;

  constructor(public dataApi:SolicitudSangreService, private storage:AngularFireStorage ) { }

  ngOnInit() {
  }

  onUpload(e, cualEs: string) {
    const id = Math.random()
        .toString(36)
        .substring(2);
      const file = e.target.files[0];
      const filePath = `SolicitudSangre/SolicitudSangre_${id}`;
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
      this.dataApi.agregarsolicitudSangre(form.value);    
      form.resetForm();      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
  }
}
