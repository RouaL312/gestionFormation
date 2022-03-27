import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-trending-menus',
  templateUrl: './daily-trending-menus.component.html',
  styleUrls: ['./daily-trending-menus.component.css']
})
export class DailyTrendingMenusComponent implements OnInit {
	
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
