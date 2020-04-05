import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarService } from "../../services/calendar.service";

@Component({
  selector: "app-aprobarcitas",
  templateUrl: "./aprobarcitas.component.html",
  styleUrls: ["./aprobarcitas.component.css"]
})
export class AprobarcitasComponent implements OnInit {
  calendarEvents: any[] = [];
  calendarPlugins = [dayGridPlugin];
  constructor(private svc: CalendarService) {}

  ngOnInit() {
    this.svc.getData().subscribe(data => (this.calendarEvents = data));
  }
}
