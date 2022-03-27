import { Component, OnInit } from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-config',
  templateUrl: './alert-config.component.html',
  styleUrls: ['./alert-config.component.css']
})
export class AlertConfigComponent implements OnInit {

    constructor(alertConfig: NgbAlertConfig) {
	/* Global Alert settings*/
		alertConfig.type = 'secondary';
		alertConfig.dismissible = true;
		alertConfig.animation = true;
	/* Global Alert settings*/
  }

  ngOnInit(): void {
  }

}
