import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionHeaderComponent implements OnInit {

  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
