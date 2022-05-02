import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

interface Customer {
  cust_id?: string;
  join_date: string;
  customer_name: string;
  location: string;
  total_spent: string;
  last_order: string;
  isSelected: boolean;
}


const CUSTOMERS: Customer[] = [
		  {
			cust_id: "5552351",
			join_date: '26 March 2020, 12:42 AM',
			customer_name: "James WItcwicky",
			location: "Corner Street 5th London",
			total_spent: "$164.52",
			last_order: "$14.89",
			isSelected:false
		  },
		  {
			cust_id: "5552323",
			join_date: '26 March 2020, 12:42 AM',
			customer_name: "Veronica",
			location: "21 King Street London",
			total_spent: "$74.92",
			last_order: "$8.13",
			isSelected:false
		  },
		  {
			cust_id: "5552375",
			join_date: '26 March 2020, 02:12 AM',
			customer_name: "Emilia Johanson",
			location: "67 St. John’s RoadLondon",
			total_spent: "$251.16",
			last_order: "$21.55",
			isSelected:false
		  },
		  {
			cust_id: "5552311",
			join_date: '26 March 2020, 12:42 AM',
			customer_name: "Olivia Shine",
			location: "35 Station Road London",
			total_spent: "$82.46",
			last_order: "$42.85",
			isSelected:false
		  },
		  {
			cust_id: "5552388",
			join_date: '26 March 2020, 02:12 AM',
			customer_name: "Jessica Wong",
			location: "11 Church Road",
			total_spent: "$24.17",
			last_order: "$11.41",
			isSelected:false
		  },
		  {
			cust_id: "5552358",
			join_date: '26 March 2020, 01:42 PM',
			customer_name: "David Horison",
			location: "981 St. John’s Road London",
			total_spent: "$24.55",
			last_order: "$67.27",
			isSelected:false
		  },
		  {
			cust_id: "5552322",
			join_date: '26 March 2020, 12:42 AM',
			customer_name: "Samantha Bake",
			location: "79 The Drive London",
			total_spent: "$22.18",
			last_order: "$11.41",
			isSelected:false
		  },
		  {
			cust_id: "5552397",
			join_date: '26 March 2020, 02:12 AM',
			customer_name: "Franky Sihotang",
			location: "6 The Avenue London",
			total_spent: "$45.86",
			last_order: "$91.68",
			isSelected:false
		  },
		  {
			cust_id: "5552349",
			join_date: '26 March 2020, 12:42 AM',
			customer_name: "Roberto Carlo",
			location: "544 Manor Road London",
			total_spent: "$34.41",
			last_order: "$11.41",
			isSelected:false
		  },
		  {
			cust_id: "5552356",
			join_date: '26 March 2020, 02:12 AM',
			customer_name: "Rendy Greenlee",
			location: "32 The Green London",
			total_spent: "$44.99",
			last_order: "$91.68",
			isSelected:false
		  },
		  {
			cust_id: "5552356",
			join_date: '26 March 2020, 02:12 AM',
			customer_name: "Rendy Greenlee",
			location: "32 The Green London",
			total_spent: "$44.99",
			last_order: "$14.89",
			isSelected:false
		  },
  ];


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


	checkedCustomerList:any;

    isMasterSel:boolean;
    checkSingleItem:boolean=true;

  constructor(private modalService: NgbModal) {

		this.isMasterSel = false;

		this.updateCustomerListing();

		this.getCheckedItemList();
  }

  ngOnInit(): void {
  }

    open(content:any) {
		this.modalService.open(content);
    }


  page = 1;
  pageSize = 10;
  collectionSize = CUSTOMERS.length;
  customers!: Customer[];

  updateCustomerListing() {
    this.customers = CUSTOMERS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }


 /* Check Uncheck all checkbox on main check box click*/

 checkUncheckAll() {
    for (var i = 0; i < this.customers.length; i++) {
      this.customers[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isMasterSel = this.customers.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedCustomerList = [];

    for (var i = 0; i < this.customers.length; i++) {
      if(this.customers[i].isSelected)
      this.checkedCustomerList.push(this.customers[i]);
	  else
	  this.checkSingleItem = false
    }

	if(this.checkSingleItem) {
	this.isMasterSel = true;
	}
    this.checkedCustomerList = JSON.stringify(this.checkedCustomerList);
  }




}
