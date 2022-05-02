import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor() { }

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

}
