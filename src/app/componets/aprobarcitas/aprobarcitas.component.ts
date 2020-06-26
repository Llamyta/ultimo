import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listWeekPlugin from "@fullcalendar/list";
import listDayPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import { CalendarService } from "../../services/calendar.service";

import { DataApiService } from "src/app/services/data-api.service";
import { SolicitudSangreService } from "src/app/services/solicitud-sangre.service";
import { HospitalesService } from "src/app/services/hospitales.service";
import { AuthService } from "src/app/services/auth.service";
import { CitasService } from "src/app/services/citas.service";
import { CitasInterface } from "src/app/models/citas";

@Component({
  selector: "app-aprobarcitas",
  templateUrl: "./aprobarcitas.component.html",
  styleUrls: ["./aprobarcitas.component.css"],
})
export class AprobarcitasComponent implements OnInit {
  calendarPlugins = [
    dayGridPlugin,
    listWeekPlugin,
    listDayPlugin,
    interactionPlugin,
  ];
  calendarEvents: any[] = [];
  citas: any[] = [];
  usuario: any[] = [];
  hospital: string;
  hospi: any[] = [];

  constructor(
    private svc: CalendarService,
    private usuarioService: SolicitudSangreService,
    private hospitalService: HospitalesService,
    private auth: AuthService,
    private citasService: CitasService
  ) {}

  dayRender(args) {
    var cell: HTMLElement = args.el;
    cell.ondblclick = (ev: MouseEvent) => {
      this.addEvent(args.date);
    };
  }

  addEvent(date) {
    var title = prompt("Event");
    if (title == "") return;
  }
  borrarCitas(id: string) {    
    this.citasService.borrarCitasRegistro(id);
  }
  ModificarCitas(item: CitasInterface) {
    item.estado = true;
    this.citasService.actualizarCitasRegistro(item);
  }

  ngOnInit() {
    this.auth.isAuth().subscribe((datos) => {
      this.hospitalService.obtenerHospitalRegistro().subscribe((data) => {
        data.forEach((element) => {
          if (element.email == datos.email) {
            this.svc
              .ObtieneCitasPersonalesPorHospital(element.hospital)
              .subscribe((datosCitas) => {
                this.citas = datosCitas;
                console.log(this.citas);
                
              });
          }
        });
      });
    });

    // this.svc.getData().subscribe((data) => {
    //   this.citas = data;

    //   this.citas.forEach((element) => {
    //     if (element.estado == false) {
    //       this.calendarEvents = data;
    //     }
    //   });
    // });

    //

    // this.hospital = element2.hospital;
    // this.hospitalService.obtenerHospitalRegistro().subscribe(hosp => {
    //   this.hospi = hosp;

    //   console.log("hospi", element.id_solicitud);
    //   console.log(element2.ci);
    //   this.hospi.forEach(element3 => {
    //     if (this.hospital === element3.hospital) {
    //
    //       console.log(this.hospital);
    //       console.log(element3.hospital);
    //     }

    //   });
    // })
  }
}
