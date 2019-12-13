import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { DataApiService } from "src/app/services/data-api.service";
import { PersonaRegistradaInterface } from "src/app/models/persona_registrada";
import { PersonaGoogleInterface } from '../../models/personaGoogle';

@Component({
  selector: "app-registro-google",
  templateUrl: "./registro-google.component.html",
  styleUrls: ["./registro-google.component.css"]
})
export class RegistroGoogleComponent implements OnInit {
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
  foto: string ='';

  public providerId: string = "null";

  

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    private personaServices: DataApiService
  ) {}

  ngOnInit() {
    // this.authService.isAuth().subscribe(user => {
    //   if (user) {
    //     this.providerId = user.providerData[0].providerId;
    //     // console.log(this.providerId);
    //     console.log(user);        
    //   }
    // });
  }

  guardarGoogle() {
    
    this.authService.isAuth().subscribe(user =>{
      if (user) {                
        let persona: PersonaGoogleInterface = {
          ci: this.ci,
          nombre: user.displayName,    
          fecha_nac: this.fecha_nac,
          genero: this.genero,
          tipo_sangre: this.tipo_sangre,
          email: user.email,    
          organos: this.organos,
          sangre: this.sangre,
          foto: user.photoURL
        };
        this.personaServices.agregarPersonaRegistro(persona);
      }
    })    
    
    this.router.navigate(["inicio"]);
  }
}
