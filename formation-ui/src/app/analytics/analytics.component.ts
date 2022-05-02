import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }
  
  trendingMenus = [
        {
          count: "#1",
          title: "Chicken curry special with cucumber",
          price: "$5.6",
          image: "assets/images/menu/Untitled-1.jpg",
          order: "89x",
          url: "admin/post-details",
        },
        {
          count: "#2",
          title: "Italiano Pizza With Garlic",
          price: "$5.6",
          image: "assets/images/menu/Untitled-2.jpg",
          order: "89x",
          url: "admin/post-details",
        },
        {
          count: "#3",
          title: "Watermelon juice with ice",
          price: "$5.6",
          image: "assets/images/menu/Untitled-3.jpg",
          order: "89x",
          url: "admin/post-details",
        },
        {
          count: "#4",
          title: "Tuna Soup spinach with himalaya salt",
          price: "$5.6",
          image: "assets/images/menu/Untitled-4.jpg",
          order: "89x",
          url: "admin/post-details",
        },
        {
          count: "#5",
          title: "Medium Spicy Spagethi Italiano",
          price: "$5.6",
          image: "assets/images/menu/Untitled-5.jpg",
          order: "89x",
          url: "admin/post-details",
        },
        {
          count: "#6",
          title: "Medium Spicy Spagethi Italiano",
          price: "$5.6",
          image: "assets/images/menu/Untitled-5.jpg",
          order: "89x",
          url: "admin/post-details",
        },
        {
          count: "#7",
          title: "Medium Spicy Spagethi Italiano",
          price: "$5.6",
          image: "assets/images/menu/Untitled-5.jpg",
          order: "89x",
          url: "admin/post-details",
        },
    
  ];
  
  loyalCustomers = [
        {
          user: "Alexzander Queqe",
          image: "assets/images/profile/Untitled-10.jpg",
          order_count: "651",
          
        },
        {
          user: "Bella Simatupang",
          image: "assets/images/profile/Untitled-11.jpg",
          order_count: "356",
        },
        {
          user: "Jordi Alaba",
          image: "assets/images/profile/Untitled-12.jpg",
          order_count: "125",
        },
        {
          user: "Kevin Jamet",
          image: "assets/images/profile/Untitled-13.jpg",
          order_count: "78",
        },
        {
          user: "Bella Simatupang",
          image: "assets/images/profile/Untitled-11.jpg",
          order_count: "356",
        },
        {
          user: "Bella Simatupang",
          image: "assets/images/profile/Untitled-11.jpg",
          order_count: "356",
        },
        {
          user: "Jordi Alaba",
          image: "assets/images/profile/Untitled-12.jpg",
          order_count: "356",
        },
    
  ];
  
  bestSelerMenus = this.sharedService.bestSelerMenus;
  
  /* bestSelerMenus = [
        {
          title: "Medium Spicy Pizza with Kemangi Leaf",
          image: "assets/images/card/Untitled-7.jpg",
          price: "$6.53",
          likes: "256k",
          share: "6,723",
          url: "admin/ecom-product-detail",
          
        },
        {
          title: "Medium Spicy Pizza with Kemangi Leaf",
          image: "assets/images/card/Untitled-8.jpg",
          price: "$6.53",
          likes: "256k",
          share: "6,723",
          url: "admin/ecom-product-detail",
        },
        {
          title: "Pizza Meal for Kids (Small size)",
          image: "assets/images/card/Untitled-8.jpg",
          price: "$6.53",
          likes: "256k",
          share: "6,723",
          url: "admin/ecom-product-detail",
        },
    
  ]; */

}
