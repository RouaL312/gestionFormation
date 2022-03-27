import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;

  constructor() { }
  
  toggleSidebarClass() {
	return this.navSidebarClass = !this.navSidebarClass  ;
  }
  toggleHamburgerClass() {
	return this.hamburgerClass = !this.hamburgerClass  ;
  }
  
  
     bestSelerMenus = [
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
    
  ];
    
    
    add_menu() {
        // const totalLength = this.bestSelerMenus.length + 1;
        const rndInt = Math.floor(Math.random() * 3);
        console.log(rndInt);
        const doc = this.bestSelerMenus[rndInt];
        this.bestSelerMenus.push(doc);
        return true;
    }
  
}
