import { Component, OnInit } from '@angular/core';
import { SolicitudOrganosService } from '../../services/solicitud-organos.service';


@Component({
  selector: 'app-listadeespera',
  templateUrl: './listadeespera.component.html',
  styleUrls: ['./listadeespera.component.css']
})
export class ListadeesperaComponent implements OnInit {
  donadores: any[] = [];
  constructor(public donadoresorganos: SolicitudOrganosService) { }

  ngOnInit() {
    this.donadoresorganos.obtenerSolicitudOrganos().subscribe(datos => {
      this.donadores = datos;
    });

   
  }

}

