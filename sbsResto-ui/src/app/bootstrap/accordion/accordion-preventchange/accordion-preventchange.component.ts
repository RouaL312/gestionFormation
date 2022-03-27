import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion-preventchange',
  templateUrl: './accordion-preventchange.component.html',
  styleUrls: ['./accordion-preventchange.component.css']
})
export class AccordionPreventchangeComponent implements OnInit {

  constructor() { }
	
	public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }	
	
  ngOnInit(): void {
  }

}
