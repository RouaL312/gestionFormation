import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

    // kk = 1;

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedDiv = 'sign-up';



    showForm(formId:any) {
        this.selectedDiv = formId;
        
        console.log(formId);
        
    }


}
