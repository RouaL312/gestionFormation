import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-notifications2',
  templateUrl: './notifications2.component.html',
  styleUrls: ['./notifications2.component.css'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class Notifications2Component implements OnInit {

   constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
   }

  ngOnInit(): void {
  }

}
