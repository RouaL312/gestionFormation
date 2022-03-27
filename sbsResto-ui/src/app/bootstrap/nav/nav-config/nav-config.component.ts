import { Component, OnInit } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav-config',
  templateUrl: './nav-config.component.html',
  styleUrls: ['./nav-config.component.css'],
  providers: [NgbNavConfig] // add NgbNavConfig to the component providers
})
export class NavConfigComponent implements OnInit {

  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {
  }

}
