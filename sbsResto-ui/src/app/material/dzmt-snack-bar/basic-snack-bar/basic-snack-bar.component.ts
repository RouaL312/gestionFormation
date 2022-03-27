import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-basic-snack-bar',
  templateUrl: './basic-snack-bar.component.html',
  styleUrls: ['./basic-snack-bar.component.css']
})
export class BasicSnackBarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  ngOnInit(): void {
  }

}
