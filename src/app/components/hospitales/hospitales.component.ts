import { HospitalesService } from './../../services/hospitales.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs/internal/Observable";
import { finalize } from "rxjs/operators";
import Swal from 'sweetalert2'
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  @ViewChild("imagenFoto", { static: true }) inputFoto: ElementRef;

  urlFoto: any;
  uploadPercentFoto: Observable<number>;

  constructor(
    public hospitalesServices: HospitalesService,
    private storage: AngularFireStorage,
    private router: Router,
    private authService: AuthService,

  ) { }

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
    this.hospitalesServices.agregarHospitalRegistro(form.value);
    

    this.authService
    .registerUser(form.value.email,form.value.pass)
    .then(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por registrarse',
        showConfirmButton: false,
        timer: 2000
      });
      form.resetForm();
      this.router.navigate(["aprobar"]);
    })
    .catch(err => 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puede realizar esta accion'        
      })      
    );
    
    
  }

}
