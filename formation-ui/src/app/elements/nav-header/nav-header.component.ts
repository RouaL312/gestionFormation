import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {


  hamburgerClass: boolean = false;

  screenHeight: any;
  screenWidth: any;

    constructor(private sharedService: SharedService) {
        this.getScreenSize();
    }

  ngOnInit(): void {

  }

  toggleHamburgerClass(){
	this.hamburgerClass = this.sharedService.toggleHamburgerClass();
  }

   @HostListener('window:resize', ['$event'])
    getScreenSize() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        const div =  document.getElementById('main-wrapper');
        if(this.screenWidth <768) {
            document.body.setAttribute('data-sidebar-style', 'overlay');
        } else if(this.screenWidth >=768 && this.screenWidth <=1023) {
            document.body.setAttribute('data-sidebar-style', 'mini');
        } else {
            document.body.setAttribute('data-sidebar-style', 'full');
        }
    }

}
