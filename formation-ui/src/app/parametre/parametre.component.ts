import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LocalStorageService} from "ngx-webstorage";
import {Role} from "../model/Role";

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {
  username!:string;
  roles!:Role[];
  role!:string;
  constructor(private title: Title,private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.title.setTitle('Paramétre')
    this.username=this.localStorageService.retrieve("login");
    this.roles=this.localStorageService.retrieve('authorities');
    this.role=this.roles[0].name;
  }

}
