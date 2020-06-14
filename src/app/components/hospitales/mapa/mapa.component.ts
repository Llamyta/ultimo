import { Component, OnInit } from '@angular/core';
import { Marcador } from './marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador;

  constructor() { 

    const nuevoMarcador = new Marcador(-17.3894997,-66.1567993);

    this.marcadores = nuevoMarcador;

  }

  ngOnInit() {
  }

  agregarMarcador(evento){

    const coords:{lat: number, lng:number} = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores = nuevoMarcador;
  }

}
