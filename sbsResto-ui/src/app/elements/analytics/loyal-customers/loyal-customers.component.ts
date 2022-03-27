import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loyal-customers',
  templateUrl: './loyal-customers.component.html',
  styleUrls: ['./loyal-customers.component.css']
})
export class LoyalCustomersComponent implements OnInit {
	
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
