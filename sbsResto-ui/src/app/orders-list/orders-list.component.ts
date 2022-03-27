import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  allOrders = [
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
        {
          order_id: "#5552356",
          date: "26 March 2020, 12:42 AM",
          user: "Rendy Greenlee",
          address: "32 The Green London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$44.99",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
        {
          order_id: "#5552388",
          date: "26 March 2020, 12:42 AM",
          user: "Jessica Wong",
          address: "11 Church Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$24.17",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
        {
          order_id: "#5552323",
          date: "26 March 2020, 12:42 AM",
          user: "Veronica",
          address: "21 King Street London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$74.92",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
        {
          order_id: "#5552322",
          date: "26 March 2020, 12:42 AM",
          user: "Samantha Bake",
          address: "79 The Drive London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$22.18",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
        {
          order_id: "#5552358",
          date: "26 March 2020, 12:42 AM",
          user: "David Horison",
          address: "981 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$24.17",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
        {
          order_id: "#5552311",
          date: "26 March 2020, 12:42 AM",
          user: "Olivia Shine",
          address: "35 Station Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$82.46",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
        {
          order_id: "#5552351",
          date: "26 March 2020, 12:42 AM",
          user: "James WItcwicky",
          address: "Corner Street 5th London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$164.52",
          order_status: "CANCELED",
          order_status_class:"text-white bgl-light"
        },
        {
          order_id: "#5552349",
          date: "26 March 2020, 12:42 AM",
          user: "Roberto Carlo",
          address: "544 Manor Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$34.41",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
        {
          order_id: "#5552397",
          date: "26 March 2020, 12:42 AM",
          user: "Franky Sihotang",
          address: "6 The Avenue London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$45.86",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
        {
          order_id: "#5552397",
          date: "26 March 2020, 12:42 AM",
          user: "Franky Sihotang",
          address: "6 The Avenue London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$45.86",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
    
  ];
  
  
  newOrders = [
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
    
  ];
  
  onProgress = [
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "PENDING",
          order_status_class:"text-warning bgl-warning"
        },
    
  ];
  
  delivered = [
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
        {
          order_id: "#5552375",
          date: "26 March 2020, 02:12 AM",
          user: "Emilia Johanson",
          address: "67 St. John’s Road London",
          // title: "Sweet Cheezy Pizza for Kids Meal (Small Size)",
          price: "$251.16",
          order_status: "DELIVERED",
          order_status_class:"text-success bgl-success"
        },
    
  ];

}
