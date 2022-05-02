import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-custom-component',
  templateUrl: './snack-bar-custom-component.component.html',
  styleUrls: ['./snack-bar-custom-component.component.css']
})
export class SnackBarCustomComponentComponent implements OnInit {

  
  ngOnInit(): void {
  }
  
  
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}





@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
