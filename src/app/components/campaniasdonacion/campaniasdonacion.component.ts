import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-campaniasdonacion',
  templateUrl: './campaniasdonacion.component.html',
  styleUrls: ['./campaniasdonacion.component.css']
})
export class CampaniasdonacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(".your-class").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
      });
    });
  }

}
