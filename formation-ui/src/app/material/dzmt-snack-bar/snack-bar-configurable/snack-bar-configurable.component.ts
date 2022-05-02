import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';


@Component({
  selector: 'app-snack-bar-configurable',
  templateUrl: './snack-bar-configurable.component.html',
  styleUrls: ['./snack-bar-configurable.component.css']
})
export class SnackBarConfigurableComponent implements OnInit {

  
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'End now', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {
  }
  
  

}
