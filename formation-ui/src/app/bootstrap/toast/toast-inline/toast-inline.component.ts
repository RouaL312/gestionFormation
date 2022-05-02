import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-inline',
  templateUrl: './toast-inline.component.html',
  styleUrls: ['./toast-inline.component.css']
})
export class ToastInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  show = true;

}
