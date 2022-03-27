import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from '../../../shared.service';


@Component({
  selector: 'app-best-seler-menus',
  templateUrl: './best-seler-menus.component.html',
  styleUrls: ['./best-seler-menus.component.css']
})
export class BestSelerMenusComponent implements OnInit {
	
  @Input() data:any;
  
  toggleLoadMore: boolean = false;
  responseMenu: boolean = false;
  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }
    
    add_menu() {
        this.toggleLoadMore = true;
        this.responseMenu = this.sharedService.add_menu();

        setTimeout(() => this.toggleLoadMore = false, 1000);

        // if(this.responseMenu) {
        // }
    }
    
    
    
}
