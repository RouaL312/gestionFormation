import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  products = [
        {
          image: "assets/images/product/1.jpg",
          title: "Bonorum et Malorum",
          url: "admin/ecom-product-detail",
          price: "$761.00",
		  ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
          ]
        },
        {
          image: "assets/images/product/2.jpg",
          title: "Striped Dress",
          url: "admin/ecom-product-detail",
          price: "$159.00",
		  ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
            {
              icon_class:"fa fa-star-half-empty",
            }
		  ]
			
        },
        {
          image: "assets/images/product/3.jpg",
          title: "BBow polka-dot",
          url: "admin/ecom-product-detail",
          price: "$357.00",
		  ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
		  ]
        },
        {
          image: "assets/images/product/4.jpg",
          title: "Z Product 360",
          url: "admin/ecom-product-detail",
          price: "$654.00",
		  ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
		  ]
        },
        {
          image: "assets/images/product/5.jpg",
          title: "Chair Grey",
          url: "admin/ecom-product-detail",
          price: "$369.00",
		  ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
		  ]
        },
        {
          image: "assets/images/product/6.jpg",
          title: "fox sake withe",
          url: "admin/ecom-product-detail",
          price: "$245.00",
		  ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
		  ]
        },
        {
          image: "assets/images/product/7.jpg",
          title: "Back Bag",
          url: "admin/ecom-product-detail",
          price: "$364.00",
		  ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
		  ]
        },
        {
          image: "assets/images/product/1.jpg",
          title: "FLARE DRESS",
          url: "admin/ecom-product-detail",
          price: "$548.00",
		  ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
            {
              icon_class:"fa fa-star-half-empty",
            },
		  ]
        },
      
      
  
    
	];

}
