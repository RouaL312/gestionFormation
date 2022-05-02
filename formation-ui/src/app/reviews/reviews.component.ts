import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  allStatus = [
        {
          image: "assets/images/table/Untitled-1.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
          rating: "4.2",
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
          image: "assets/images/table/Untitled-2.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: "3.0",
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
          image: "assets/images/table/Untitled-3.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: "4.5",
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
          image: "assets/images/table/Untitled-4.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
          rating: "4.5",
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
          image: "assets/images/table/Untitled-5.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: "4.2",
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
    
    published = [
        {
          image: "assets/images/table/Untitled-1.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
          rating: "4.2",
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
          image: "assets/images/table/Untitled-2.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: "3.0",
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
    
    deleted = [
        {
          image: "assets/images/table/Untitled-3.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
          rating: "4.2",
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
          image: "assets/images/table/Untitled-4.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: "4.5",
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
          image: "assets/images/table/Untitled-5.jpg",
          code: "#C01234",
          user: "James Sitepu",
          date: "26/04/2020, 12:42 AM",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: "4.5",
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
