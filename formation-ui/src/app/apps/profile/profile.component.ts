import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  
  news = [
        {
          image: "assets/images/profile/5.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.",
          url: "admin/post-details",
        },
        {
          image: "assets/images/profile/6.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.",
          url: "admin/post-details",
        },
        {
          image: "assets/images/profile/7.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.", 
          url: "admin/post-details",
        },
    
  ];
  
  
	
	open(content:any) {
		this.modalService.open(content);
	}

}
