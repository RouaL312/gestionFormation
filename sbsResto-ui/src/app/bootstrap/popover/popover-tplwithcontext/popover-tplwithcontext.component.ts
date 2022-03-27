import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-tplwithcontext',
  templateUrl: './popover-tplwithcontext.component.html',
  styleUrls: ['./popover-tplwithcontext.component.css']
})
export class PopoverTplwithcontextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   name = 'World';

  toggleWithGreeting(popover: any, greeting: string, language: string) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({greeting, language});
    }
  }
}
