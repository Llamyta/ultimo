import { Component, OnInit } from "@angular/core";
import { HospitalesService } from '../../services/hospitales.service';


declare var jQuery: any;
declare var $: any;

@Component({
  selector: "app-puntosdonacion",
  templateUrl: "./puntosdonacion.component.html",
  styleUrls: ["./puntosdonacion.component.css"]
})
export class PuntosdonacionComponent implements OnInit {

  diferenciadorModalVar: string;

  constructor(public hospitalesServices: HospitalesService) {}

  public hospitales: any[] = [];

  ngOnInit() {
    
    $(document).ready(function() {
      $(".your-class").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: true,
      });
    });
    // Recupera todos los hopitales
    this.hospitalesServices.obtenerHospitalRegistro().subscribe( resp =>{
      this.hospitales = resp;
    });
  }

  diferenciadorModal(id): void{
    this.diferenciadorModalVar = id;
  }
}
