import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-dialog-from-menu',
  templateUrl: './dialog-from-menu.component.html',
  styleUrls: ['./dialog-from-menu.component.css']
})
export class DialogFromMenuComponent implements OnInit {


  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
  
  ngOnInit(): void {
  }

}


@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html',
})
export class DialogFromMenuExampleDialog {}
