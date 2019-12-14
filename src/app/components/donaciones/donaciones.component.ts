import { Component, OnInit } from '@angular/core';
import { SolicitudOrganosService } from '../../services/solicitud-organos.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {
  donadores: any[] = [];
  constructor(public donadoresorganos: SolicitudOrganosService) { }

  ngOnInit() {
    this.donadoresorganos.obtenerSolicitudOrganos().subscribe(datos => {
      this.donadores = datos;
    });
  }

}
