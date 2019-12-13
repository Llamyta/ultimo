import { Component, OnInit } from "@angular/core";

declare var jQuery: any;
declare var $: any;

@Component({
  selector: "app-puntosdonacion",
  templateUrl: "./puntosdonacion.component.html",
  styleUrls: ["./puntosdonacion.component.css"]
})
export class PuntosdonacionComponent implements OnInit {
  constructor() {}

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
  }
}
