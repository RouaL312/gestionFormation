import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-order-request',
  templateUrl: './recent-order-request.component.html',
  styleUrls: ['./recent-order-request.component.css']
})
export class RecentOrderRequestComponent implements OnInit {
	
  @Input() data:any;	

  constructor() { }

  ngOnInit(): void {
  }
  
  itemHtml: string ="";

}
