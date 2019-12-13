import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { PersonaRegistradaInterface } from "../../models/persona_registrada";
import { DataApiService } from "../../services/data-api.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-registrarse",
  templateUrl: "./registrarse.component.html",
  styleUrls: ["./registrarse.component.css"]
})
export class RegistrarseComponent implements OnInit {
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

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    private personaServices: DataApiService
  ) {}

  ngOnInit() {}

  onAddUser() {
    let persona: PersonaRegistradaInterface = {
      ci: this.ci,
      nombre: this.nombre,
      apellido_p: this.apellido_p,
      apellido_m: this.apellido_m,
      fecha_nac: this.fecha_nac,
      genero: this.genero,
      tipo_sangre: this.tipo_sangre,
      email: this.email,
      pass: this.pass,
      organos: this.organos,
      sangre: this.sangre,
      id: ""
    };

    this.personaServices.agregarPersonaRegistro(persona);
    this.authService
      .registerUser(this.email, this.pass)
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

  onLoginGoogle() {
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
  }
}
