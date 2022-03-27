import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-prevent-autohide',
  templateUrl: './toast-prevent-autohide.component.html',
  styleUrls: ['./toast-prevent-autohide.component.css']
})
export class ToastPreventAutohideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  show = false;
  autohide = true;

}
