import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-tplcontent',
  templateUrl: './popover-tplcontent.component.html',
  styleUrls: ['./popover-tplcontent.component.css']
})
export class PopoverTplcontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   name = 'World';

}
