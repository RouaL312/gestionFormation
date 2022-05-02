import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-initial-value-no-form',
  templateUrl: './initial-value-no-form.component.html',
  styleUrls: ['./initial-value-no-form.component.css']
})
export class InitialValueNoFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  cars: Car[] = [
    {value: 'ford', viewValue: 'Ford'},
    {value: 'chevrolet', viewValue: 'Chevrolet'},
    {value: 'dodge', viewValue: 'Dodge'}
  ];
  selectedFood = this.foods[2].value;
  selectedCar = this.cars[0].value;

  selectCar(event: Event) {
    this.selectedCar = (event.target as HTMLSelectElement).value;
  }

}
