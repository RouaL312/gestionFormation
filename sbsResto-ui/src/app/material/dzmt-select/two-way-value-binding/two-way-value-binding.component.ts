import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-value-binding',
  templateUrl: './two-way-value-binding.component.html',
  styleUrls: ['./two-way-value-binding.component.css']
})
export class TwoWayValueBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selected = 'option2';

}
