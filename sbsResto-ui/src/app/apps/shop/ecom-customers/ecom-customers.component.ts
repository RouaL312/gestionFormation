import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-customers',
  templateUrl: './ecom-customers.component.html',
  styleUrls: ['./ecom-customers.component.css']
})
export class EcomCustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
  
  checkUncheckAll(event:any) {
     var checkboxes = document.getElementsByTagName('input');
     if (event.target.checked) {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = true;
             }
         }
     } else {
         for (var i = 0; i < checkboxes.length; i++) {
             // console.log(i)
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
             }
         }
     }
 }
  
  
  

}
