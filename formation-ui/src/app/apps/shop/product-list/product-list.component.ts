import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  
  products = [
        {
          image: "assets/images/product/2.jpg",
          title: "Solid Women's V-neck Dark T-Shirt",
          url: "ecom-product-detail",
          price: "$320.00",
          reviews: 34,
          stock: "In stock",
          stock_class: "fa fa-check-circle text-success",
          product_code: "0405689",
          brand: "Lee",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
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
          title: "Solid Women's V-neck Dark T-Shirt",
          url: "ecom-product-detail",
          price: "$325.00",
          reviews: 34,
          stock: "In stock",
          stock_class: "fa fa-check-circle text-success",
          product_code: "0405689",
          brand: "Lee",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
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
          title: "Solid Women's V-neck Dark T-Shirt",
          url: "ecom-product-detail",
          price: "$480.00",
          reviews: 34,
          stock: "In stock",
          stock_class: "fa fa-check-circle text-success",
          product_code: "0405689",
          brand: "Lee",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
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
          title: "Solid Women's V-neck Dark T-Shirt",
          url: "ecom-product-detail",
          price: "$658.00",
          reviews: 34,
          stock: "In stock",
          stock_class: "fa fa-check-circle text-success",
          product_code: "0405689",
          brand: "Lee",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
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
          title: "Solid Women's V-neck Dark T-Shirt",
          url: "ecom-product-detail",
          price: "$280.00",
          reviews: 34,
          stock: "In stock",
          stock_class: "fa fa-check-circle text-success",
          product_code: "0405689",
          brand: "Lee",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
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
          url: "ecom-product-detail",
          price: "$364.00",
          reviews: 34,
          stock: "In stock",
          stock_class: "fa fa-check-circle text-success",
          product_code: "0405689",
          brand: "Lee",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
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
  
	open(content:any) {
		this.modalService.open(content);
	}

}
