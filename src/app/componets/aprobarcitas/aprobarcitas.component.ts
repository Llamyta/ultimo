import { Component, OnInit } from "@angular/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import listWeekPlugin from '@fullcalendar/list';
import listDayPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import { CalendarService } from '../../services/calendar.service';


@Component({
  selector: "app-aprobarcitas",
  templateUrl: "./aprobarcitas.component.html",
  styleUrls: ["./aprobarcitas.component.css"]
})
export class AprobarcitasComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, listWeekPlugin, listDayPlugin, interactionPlugin];
  calendarEvents: any[] = [];
  constructor(private svc: CalendarService) { }

  dayRender(args) {

    var cell: HTMLElement = args.el;
    cell.ondblclick = (ev:MouseEvent) => {
      this.addEvent(args.date);
    }
  }

  addEvent(date) {
    var title = prompt('Event');
    if (title == '') return;
    
  }

  ngOnInit() {
    this.svc.getData().subscribe(data => this.calendarEvents = data);
  }
}