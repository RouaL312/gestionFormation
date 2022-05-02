import { Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar-config',
  templateUrl: './progressbar-config.component.html',
  styleUrls: ['./progressbar-config.component.css'],
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class ProgressbarConfigComponent implements OnInit {

  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit(): void {
  }

}
