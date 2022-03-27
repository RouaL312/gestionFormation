import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tooltip-with-custom-class',
  templateUrl: './tooltip-with-custom-class.component.html',
  styleUrls: ['./tooltip-with-custom-class.component.css'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class TooltipWithCustomClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
