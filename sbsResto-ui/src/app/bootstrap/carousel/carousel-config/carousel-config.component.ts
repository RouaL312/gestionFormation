import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel-config',
  templateUrl: './carousel-config.component.html',
  styleUrls: ['./carousel-config.component.css']
})
export class CarouselConfigComponent implements OnInit {

	images = [
		'assets/images/big/img1.jpg',
		'assets/images/big/img2.jpg',
		'assets/images/big/img3.jpg',
		'assets/images/big/img4.jpg',
	];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }
  
  
}
