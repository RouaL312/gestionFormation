import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-header-scrollbar-action',
  templateUrl: './header-scrollbar-action.component.html',
  styleUrls: ['./header-scrollbar-action.component.css']
})
export class HeaderScrollbarActionComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}