import { Component, OnInit } from "@angular/core";
import { SolicitudSangreService } from "../../services/solicitud-sangre.service";
import { AuthService } from "../../services/auth.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { PersonaRegistradaInterface } from "src/app/models/persona_registrada";
import { DataApiService } from "../../services/data-api.service";
import { CitasService } from "../../services/citas.service";
import { NgForm } from "@angular/forms";
import Swal from "sweetalert2";
declare var jQuery: any;
declare var $: any;
@Component({
  selector: "app-campaniasdonacion",
  templateUrl: "./campaniasdonacion.component.html",
  styleUrls: ["./campaniasdonacion.component.css"],
})
export class CampaniasdonacionComponent implements OnInit {
  estaLogeado: boolean = false;
  personaSolicitud: any[] = [];
  sinLogeoPersonas: any[] = [];

  personaLogeada: any[] = [];
  ciUsuario: any;
  nombreUsuario: any;
  tipoSangreUsuario: any;
  ciSolicitud: any;
  emailLogeado: string;
  constructor(
    public solicitudSangre: SolicitudSangreService,
    private authService: AuthService,
    private persona: DataApiService,
    public citas: CitasService
  ) {}

  ngOnInit() {
    // Verifica que este logeado
    this.authService.isAuth().subscribe((user) => {
      if (user) {
        this.estaLogeado = true;
        this.emailLogeado = user.email;

        this.persona.obtenerPersonaRegistro().subscribe((persona) => {
          this.personaLogeada = persona;
          this.personaLogeada.forEach((element) => {
            if (this.emailLogeado == element.email) {
              this.ciUsuario = element.ci;
              this.nombreUsuario = element.nombre + " " + element.apellido_p;
              this.tipoSangreUsuario = element.tipo_sangre;
            }
          });
        });
      } else {
        this.estaLogeado = false;
      }
    });

    this.solicitudSangre.obtenersolicitudSangre().subscribe((resp) => {
      this.personaSolicitud = resp;
      this.sinLogeoPersonas = resp;
    });

    // $(document).ready(function() {
    //   $(".your-class").slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     dots: true,
    //     arrows: true,
    //   });
    // });
  }
  personaSolicitudDonador: any;
  enviarIdSolicitud(item: any) {
    this.ciSolicitud = item.id;    
    this.personaSolicitudDonador = item;
    console.log("hola",item);    
  }

  guardar(form: NgForm) {
    form.value.id_usuario = this.ciUsuario;
    form.value.id_solicitud = this.ciSolicitud;
    form.value.estado = false;
    form.value.title = this.nombreUsuario;
    form.value.start = form.value.fecha + "-" + form.value.hora;

    form.value.apellido_m = this.personaSolicitudDonador.apellido_m;
    form.value.apellido_p = this.personaSolicitudDonador.apellido_p;
    form.value.cantidad_donadores = this.personaSolicitudDonador.cantidad_donadores;
    // form.value.fecha_nac = this.personaSolicitudDonador.fecha_nac;
    form.value.foto = this.personaSolicitudDonador.foto;
    form.value.genero = this.personaSolicitudDonador.genero;
    form.value.hospital = this.personaSolicitudDonador.hospital;
    form.value.telefono = this.personaSolicitudDonador.telefono;
    form.value.tipo_sangre = this.personaSolicitudDonador.tipo_sangre;
    form.value.nombre = this.personaSolicitudDonador.nombre;




    var cadena = form.value.start.split("-");

    var cadena2 = cadena[3].split(":");

    cadena2.push("00");
    cadena2[0] = parseInt(cadena2[0]) + 4;
    var datum = new Date(
      Date.UTC(
        cadena[0],
        cadena[1] - 1,
        cadena[2],
        cadena2[0],
        cadena2[1],
        cadena2[2]
      )
    );

    form.value.start = datum;
    this.citas.agregarCitasRegistro(form.value);
    form.resetForm();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se guardo correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
