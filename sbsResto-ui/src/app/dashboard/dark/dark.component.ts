import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css']
})
export class DarkComponent implements OnInit {

    constructor() { 
        this.setThemeVersion();
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
    
  ];
  
  recentOrder = [
        {
          image: "assets/images/card/Untitled-1.jpg",
          title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          code: "#0010235",
          user: "Peter Parkur",
          address: "South Corner st41256 london",
          price: "$7.4",
          quantity: "x3",
          order_status: "PENDING",
          url: "admin/ecom-product-detail",
          order_status_class:"text-warning"
        },
        {
          image: "assets/images/card/Untitled-2.jpg",
          title: "Tuna soup spinach with himalaya salt",
          code: "#0010235",
          user: "Jimmy Kueai",
          address: "South Corner St.41256 London",
          price: "$7.4",
          quantity: "x3",
          order_status: "PENDING",
          url: "admin/ecom-product-detail",
          order_status_class:"text-warning"
        },
        {
          image: "assets/images/card/Untitled-3.jpg",
          title: "Extreme Deluxe Pizza Mozarella with Garlic",
          code: "#0010235",
          user: "Cindy Alexa",
          address: "Blue Ocean St.41551 London",
          price: "$8.2",
          quantity: "x1",
          order_status: "DELIVERED",
          url: "admin/ecom-product-detail",
          order_status_class:"text-success"
        },
        {
          image: "assets/images/card/Untitled-1.jpg",
          title: "Mozarella Pizza With Random Topping",
          code: "#0010235",
          user: "Cindy Alexa",
          address: "Blue Ocean St.41551 London",
          price: "$8.2",
          quantity: "x1",
          order_status: "CANCELED",
          url: "admin/ecom-product-detail",
          order_status_class:"text-light"
        },
        {
          image: "assets/images/card/Untitled-2.jpg",
          title: "Tuna soup spinach with himalaya salt",
          code: "#0010235",
          user: "Jimmy Kueai",
          address: "Blue Ocean St.41551 London",
          price: "$7.4",
          quantity: "x1",
          order_status: "DELIVERED",
          url: "admin/ecom-product-detail",
          order_status_class:"text-success"
        },
    
  ];
  
  setThemeVersion() {
    document.body.setAttribute('data-theme-version', 'dark');
  }

  ngOnInit(): void {
  }
  
    ngOnDestroy(): void {
      document.body.setAttribute('data-theme-version', 'light');
      
    }

}
