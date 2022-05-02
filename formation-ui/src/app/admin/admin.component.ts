import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;
  displayDialog: boolean = false;

  constructor( private title: Title)
  {
    this.title.setTitle('Accueil')
  }
}
