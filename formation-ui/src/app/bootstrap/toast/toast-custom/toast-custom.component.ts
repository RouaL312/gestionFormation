import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-custom',
  templateUrl: './toast-custom.component.html',
  styleUrls: ['./toast-custom.component.css']
})
export class ToastCustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  show = true;

}
