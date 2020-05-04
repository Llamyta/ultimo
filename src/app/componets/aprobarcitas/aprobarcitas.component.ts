import { Component, OnInit } from "@angular/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import listWeekPlugin from '@fullcalendar/list';
import listDayPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import { CalendarService } from '../../services/calendar.service';

import { DataApiService } from 'src/app/services/data-api.service';
import { SolicitudSangreService } from 'src/app/services/solicitud-sangre.service';
import { HospitalesService } from 'src/app/services/hospitales.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: "app-aprobarcitas",
  templateUrl: "./aprobarcitas.component.html",
  styleUrls: ["./aprobarcitas.component.css"]
})
export class AprobarcitasComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, listWeekPlugin, listDayPlugin, interactionPlugin];
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
  ) { }

  dayRender(args) {

    var cell: HTMLElement = args.el;
    cell.ondblclick = (ev: MouseEvent) => {
      this.addEvent(args.date);
    }
  }

  addEvent(date) {
    var title = prompt('Event');
    if (title == '') return;

  }

  ngOnInit() {


    this.svc.getData().subscribe(data => {
      this.citas = data;
      this.usuarioService.obtenersolicitudSangre().subscribe(user => {
        this.usuario = user;
        console.log(this.usuario, "este");
        this.citas.forEach(element => {
          this.usuario.forEach(element2 => {
            if (element.id_solicitud === element2.ci) {
              console.log("ci", element.id_solicitud)
              console.log("ci", element2.ci)


              this.auth.isAuth().subscribe(user => {
                this.hospitalService.obtenerHospitalRegistro().subscribe(resp => {
                  resp.forEach(element3 => {
                    if (user.email == element3.email) {
                      console.log(element3.hospital);
                      console.log(element2.hospital);
                      
                      if(element2.hospital===element3.hospital){
                        this.calendarEvents = data;
                      }

                    }
                  });
               });
              });
            }
          });
        });
      })



    });





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