import { Component, OnInit } from "@angular/core";
import { HospitalesService } from "../../services/hospitales.service";
import { AuthService } from "src/app/services/auth.service";
import { CitasService } from "../../services/citas.service";
import { CitasHospitalService } from "../../services/citas-hospital.service";
import { DataApiService } from "../../services/data-api.service";
import { NgForm } from "@angular/forms";
import Swal from 'sweetalert2';
import { from } from 'rxjs';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: "app-puntosdonacion",
  templateUrl: "./puntosdonacion.component.html",
  styleUrls: ["./puntosdonacion.component.css"]
})
export class PuntosdonacionComponent implements OnInit {
  diferenciadorModalVar: string;
  estaLogeado: boolean = false;

  ciDonador: string;
  hospitalReceptor: string;
  constructor(
    public hospitalesServices: HospitalesService,
    private authService: AuthService,
    public citas: CitasHospitalService,
    private donador: DataApiService
  ) {}

  public hospitales: any[] = [];

  ngOnInit() {
    // Verifica que este logeado
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.estaLogeado = true;
        this.donador.obtenerPersonaRegistro().subscribe(resp => {
          resp.forEach(element => {
            if (user.email == element.email) {
              this.ciDonador = element.ci;
            }
          });
        });
      } else {
        this.estaLogeado = false;
      }
    });

    $(document).ready(function() {
      $(".your-class").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: true
      });
    });
    // Recupera todos los hopitales
    this.hospitalesServices.obtenerHospitalRegistro().subscribe(resp => {
      this.hospitales = resp;
    });
  }
  enviarIdSolicitud(hospital: string) {
    this.hospitalReceptor = hospital;
  }

  guardar(form: NgForm) {
    form.value.id_usuario = this.ciDonador;
    form.value.hospital = this.hospitalReceptor;    
    form.value.estado = false;    
    this.citas.agregarCitasRegistro(form.value);
    form.resetForm();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se guardo correctamente",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
