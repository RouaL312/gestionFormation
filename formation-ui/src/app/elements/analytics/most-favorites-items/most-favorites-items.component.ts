import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-favorites-items',
  templateUrl: './most-favorites-items.component.html',
  styleUrls: ['./most-favorites-items.component.css']
})
export class MostFavoritesItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
    allCategories  = [
        {
          title: "Mozarella Pizza with Random Topping",
          image: "assets/images/card/Untitled-10.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "85",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
          
        },
        {
          title: "Extreme Deluxe Pizza Super With Mozarella",
          image: "assets/images/card/Untitled-11.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "45",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
        {
          title: "Watermelon Juice with Ice",
          image: "assets/images/card/Untitled-12.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "75",
          url: "admin/ecom-product-detail",
          ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
        {
          title: "Chicken Kebab from Turkish with Garlic",
          image: "assets/images/card/Untitled-13.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "35",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
        {
          title: "Medium Spicy Pizza with Kemangi Leaf",
          image: "assets/images/card/Untitled-14.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "85",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
        {
          title: "Orange Juice Special Smoothy with Sugar",
          image: "assets/images/card/Untitled-11.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "21",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
    
  ];
  
  
  mainCourse  = [
        {
          title: "Mozarella Pizza with Random Topping",
          image: "assets/images/card/Untitled-10.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "85",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
          
        },
        {
          title: "Extreme Deluxe Pizza Super With Mozarella",
          image: "assets/images/card/Untitled-11.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "45",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
        {
          title: "Watermelon Juice with Ice",
          image: "assets/images/card/Untitled-12.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "75",
          url: "admin/ecom-product-detail",
          ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
    
  ];
  
    pizza  = [
        {
          title: "Mozarella Pizza with Random Topping",
          image: "assets/images/card/Untitled-10.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "85",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
          
        },
        {
          title: "Extreme Deluxe Pizza Super With Mozarella",
          image: "assets/images/card/Untitled-11.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "45",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
        {
          title: "Watermelon Juice with Ice",
          image: "assets/images/card/Untitled-12.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "75",
          url: "admin/ecom-product-detail",
          ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
        {
          title: "Chicken Kebab from Turkish with Garlic",
          image: "assets/images/card/Untitled-13.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "35",
          url: "admin/ecom-product-detail",
          ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-starr op5",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
    
  ];
  
  drink  = [
        {
          title: "Mozarella Pizza with Random Topping",
          image: "assets/images/card/Untitled-10.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "85",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
          
        },
        {
          title: "Extreme Deluxe Pizza Super With Mozarella",
          image: "assets/images/card/Untitled-11.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "45",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
  ];
  
  
  dessert  = [
        {
          title: "Mozarella Pizza with Random Topping",
          image: "assets/images/card/Untitled-10.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "85",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
          
        },
        {
          title: "Extreme Deluxe Pizza Super With Mozarella",
          image: "assets/images/card/Untitled-11.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "45",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
        {
          title: "Watermelon Juice with Ice",
          image: "assets/images/card/Untitled-12.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "75",
          url: "admin/ecom-product-detail",
          ratings_class: [
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
        },
    ];
  
  
  more  = [
        {
          title: "Mozarella Pizza with Random Topping",
          image: "assets/images/card/Untitled-10.jpg",
          total_sales: "2,441",
          reviews: "454",
          graph: "85",
          url: "admin/ecom-product-detail",
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
              icon_class:"fa fa-star op5",
            },
            {
              icon_class:"fa fa-star op5",
            }
		  ]
          
        },
    ];  
  
  

}
