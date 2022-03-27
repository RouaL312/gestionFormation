import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Animal {
  name: string;
  sound: string;
}


@Component({
  selector: 'app-select-form-field-features',
  templateUrl: './select-form-field-features.component.html',
  styleUrls: ['./select-form-field-features.component.css']
})
export class SelectFormFieldFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

}
