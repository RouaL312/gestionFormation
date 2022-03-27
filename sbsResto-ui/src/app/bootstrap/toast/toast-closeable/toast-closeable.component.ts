import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-closeable',
  templateUrl: './toast-closeable.component.html',
  styleUrls: ['./toast-closeable.component.css']
})
export class ToastCloseableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  show = true;

  close() {
    this.show = false;
    setTimeout(() => this.show = true, 3000);
  }

}
