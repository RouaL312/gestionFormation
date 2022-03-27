import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-tplwithcontext',
  templateUrl: './tooltip-tplwithcontext.component.html',
  styleUrls: ['./tooltip-tplwithcontext.component.css']
})
export class TooltipTplwithcontextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'World';

  toggleWithGreeting(tooltip: any, greeting: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({greeting});
    }
  }

}
