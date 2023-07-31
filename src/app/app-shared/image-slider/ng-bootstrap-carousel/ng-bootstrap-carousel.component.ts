import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { fadeInOutCarousel } from '../../animations/animations';


@Component({
  selector: 'app-ng-bootstrap-carousel',
  templateUrl: './ng-bootstrap-carousel.component.html',
  styleUrls: ['./ng-bootstrap-carousel.component.css'],
  animations: [fadeInOutCarousel],
  providers: [NgbCarouselConfig]
})
export class NgBootstrapCarouselComponent {

  images = [
    { title: 'Environmental Health & Safety', short: 'We are geared to assist our clients to comply with OHS, Environmental and Food Safety.', src: "../assets/banners/1.jpg" },
    { title: 'Food Safety ', short: 'Addressing Food Safety issues with all clients at all levels, at the language that they understand well.', src: "../assets/banners/2.jpg" },
    {
      title: 'Electrical Engineering', short: 'Consultancy work in a wide range of business sectors include Construction, Telecommunications, etc', src: "../assets/banners/3.jpg" },
    { title: 'Fire Services', short: 'We do servicing and installation of fire fighting equipment', src: "../assets/banners/4.jpg" }
  ];

  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 4000;
    config.keyboard = true;
    config.pauseOnHover = true;
    
  }

}
