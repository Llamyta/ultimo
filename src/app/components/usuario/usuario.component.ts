import { Component, OnInit } from "@angular/core";
import { CitasHospitalService } from "../../services/citas-hospital.service";
import { CitasService } from "../../services/citas.service";
import { DataApiService } from "../../services/data-api.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {
  ciPersona: any;
  citasHospitalesvar: any[] = [];

  personaCompleta: any[]=[];
  fotoPersona: any;
  email:any;
  constructor(
    public citasHospitales: CitasHospitalService,
    public citaspersonas: CitasService,
    public persona: DataApiService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      this.fotoPersona = user.photoURL;
      this.email=user.email;
      console.log("Email del auth",this.email);



      // recupera hospitales
      this.persona.obtenerPersonaRegistro().subscribe(resp => {
        resp.forEach(element => {
          if (user.email == element.email) {
            this.personaCompleta.push(element);
            this.ciPersona = element.ci;
            this.citasHospitales.obtenerCitasRegistro().subscribe(citasHosp => {
              citasHosp.forEach(element2 => {
                if (this.ciPersona == element2.id_usuario) {
                  this.citasHospitalesvar.push(element2);                  
                }
              });
            });
          }
        });
      });
      console.log(this.personaCompleta);
      
      //  recupera citas personales
      this.persona.obtenerPersonaRegistro().subscribe(resp => {
        resp.forEach(element => {
          if (user.email == element.email) {
            this.ciPersona = element.ci;
            this.citaspersonas.obtenerCitasRegistro().subscribe(citasHosp => {
              citasHosp.forEach(element2 => {
                if (this.ciPersona == element2.id_usuario) {
                  this.citasHospitalesvar.push(element2);
                  console.log(this.citasHospitalesvar);
                }
              });
            });
          }
        });
      });
    });
  }
}
