import { Component, OnInit } from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tooltip-config',
  templateUrl: './tooltip-config.component.html',
  styleUrls: ['./tooltip-config.component.css'],
  providers: [NgbTooltipConfig] // add NgbTooltipConfig to the component providers
})
export class TooltipConfigComponent implements OnInit {

  constructor(config: NgbTooltipConfig) {
    // customize default values of tooltips used by this component tree
    config.placement = 'right';
    config.triggers = 'click';
  }

  ngOnInit(): void {
  }

}
