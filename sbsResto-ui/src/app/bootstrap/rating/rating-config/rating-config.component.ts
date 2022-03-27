import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating-config',
  templateUrl: './rating-config.component.html',
  styleUrls: ['./rating-config.component.css'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class RatingConfigComponent implements OnInit {

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
