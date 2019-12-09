import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { PersonaRegistradaInterface } from 'src/app/models/persona_registrada';

@Component({
  selector: 'app-registro-google',
  templateUrl: './registro-google.component.html',
  styleUrls: ['./registro-google.component.css']
})
export class RegistroGoogleComponent implements OnInit {

  ci: string ='';
  nombre: string = '';
  apellido_p: string ='';
  apellido_m: string ='';
  fecha_nac: Date = new Date;
  genero: string = '';
  tipo_sangre: string ='';  
  public email: string = '';
  public pass: string ='';
  organos: string = '';
  sangre: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService:AuthService, private personaServices: DataApiService) { }

  ngOnInit() {
  }


  guardarGoogle(){
    let persona: PersonaRegistradaInterface= {
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
      id: ''
    }    
    this.personaServices.agregarPersonaRegistro(persona);
    this.router.navigate(['inicio']);


  }
}
