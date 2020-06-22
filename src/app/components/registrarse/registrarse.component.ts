import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { finalize } from "rxjs/operators";
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { AuthService } from "../../services/auth.service";
import { PersonaRegistradaInterface } from "../../models/persona_registrada";
import { DataApiService } from "../../services/data-api.service";
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-registrarse",
  templateUrl: "./registrarse.component.html",
  styleUrls: ["./registrarse.component.css"]
})
export class RegistrarseComponent implements OnInit {
  @ViewChild("imagenFoto", { static: true }) inputFoto: ElementRef;

  urlFoto: any;
  uploadPercentFoto: Observable<number>;

  ci: string = "";
  nombre: string = "";
  apellido_p: string = "";
  apellido_m: string = "";
  fecha_nac: Date = new Date();
  genero: string = "";
  tipo_sangre: string = "";
  public email: string = "";
  public pass: string = "";
  organos: string = "";
  sangre: string = "";
  foto: string="";

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    public personaServices: DataApiService,
    private storage:AngularFireStorage
  ) {}

  ngOnInit() {}
  onUpload(e, cualEs: string) {
    const id = Math.random()
        .toString(36)
        .substring(2);
      const file = e.target.files[0];
      const filePath = `avatar/avatar_${id}`;
      const ref = this.storage.ref(filePath);
      const taks = this.storage.upload(filePath, file);
      this.uploadPercentFoto = taks.percentageChanges();

      taks
        .snapshotChanges()
        .pipe(finalize(() => (this.urlFoto = ref.getDownloadURL())))
        .subscribe();
  }

  onAddUser(form:NgForm) {
    
    form.value.foto = this.inputFoto.nativeElement.value;
    form.value.sangre = this.sangre;
    form.value.organos = this.organos;
    this.personaServices.agregarPersonaRegistro(form.value);
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
        this.router.navigate(["inicio"]);
      })
      .catch(err => 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se puede realizar esta accion'        
        })      
      );
  }

  onLoginRedirect(): void {
    this.router.navigate(["inicio"]);
  }

 /* onLoginGoogle() {
    this.authService
      .loginGoogleUser()
      .then(res => {
        this.router.navigate(["google"]);
      })
      .catch(err => 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se puede realizar esta accion'        
        })
        );
  }*/
}
