import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-custom-trigger-text',
  templateUrl: './custom-trigger-text.component.html',
  styleUrls: ['./custom-trigger-text.component.css']
})
export class CustomTriggerTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}
