import { Component, OnInit } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-config',
  templateUrl: './popover-config.component.html',
  styleUrls: ['./popover-config.component.css'],
  providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers
})
export class PopoverConfigComponent implements OnInit {

  constructor(config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'right';
    config.triggers = 'hover';
  }

  ngOnInit(): void {
  }

}
