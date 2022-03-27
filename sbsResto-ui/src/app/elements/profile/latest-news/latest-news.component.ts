import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
	
  @Input() data:any;	

  constructor() { }

  ngOnInit(): void {
  }

}
