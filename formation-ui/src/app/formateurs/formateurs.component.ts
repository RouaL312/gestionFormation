import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "../model/User";
import {Formateurs} from "../model/Formateurs";
import {UserService} from "../shared/service/User.service";
import {FormateursService} from "../shared/service/formateurs.service";

let FORMATEURS: Formateurs[] = [];

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {
  openpopup: boolean=false;
  FormateurGroup!: FormGroup;
  FormateurForm!: Formateurs;
  nameControl: any;
  prenomControl: any;
  displayEdit: boolean=false;
  displayAdd: any;
  title!: 'formateurs';
  formateurs!: Formateurs[];
  formateur!: Formateurs;

  constructor(private formateursService: FormateursService, ) {

  }

  ngOnInit(): void {
    this.getAllFormateurs()
  }
  getAllFormateurs() {
    return this.formateursService.getAllFormateurs().subscribe(data => {
      this.formateurs = data;
      console.log(data);
      FORMATEURS = this.formateurs
    })
  }

  editFormateur(formateur: any) {

  }

  deleteFormateur(formateur: any) {

  }

  addFormateur() {

  }

  saveNewFormateur() {

  }

  saveEditFormateur(formateur: any) {

  }

  hideDialog() {

  }
}
