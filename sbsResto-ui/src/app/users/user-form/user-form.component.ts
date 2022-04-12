import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoleService} from "../../shared/service/role.service";
import {Role} from "../../model/Role";
import {Equipe} from "../../model/Equipe";
import {EquipeService} from "../../shared/service/equipe.service";
import {User} from "../../model/User";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {UserService} from "../../shared/service/User.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  addUserGroup!: FormGroup;
  addUserFrorm!: User;

  constructor(private roleService: RoleService,private equipeService:EquipeService ,private spinner: NgxSpinnerService,private messageService: MessageService,private userService: UserService) {
    this.addUserGroup = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      typeAuthControl :new FormControl('', [
        Validators.required,
      ]),
      equipes : new FormControl('', [
        Validators.required,
      ]),
      passwordControl : new FormControl('', [
        Validators.required,

      ]),
      nameControl : new FormControl('', [
        Validators.required,
      ]),
      roles : new FormControl('', [
        Validators.required,
      ]),
      prenomControl : new FormControl('', [
        Validators.required,
      ]),
      usernameControl : new FormControl('', [
        Validators.required,
      ]),
      numTelephoneControl : new FormControl('', [
        Validators.required,
      ]),
    })
    this.addUserFrorm = {
      id: undefined,
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      equipe: undefined ,
      authorities: [],
      codePin: true,
      numTelephone:''
    }
  }

  ngOnInit(): void {
    this.getAllRoles();
    this.getAllEquipe();
    this.typeAuthControl.setValue("Code Pin")
  }
  roleList: Role[] = [];
  equipeList: Equipe[] = [];
  submitted = false;
  authentication: string[] = ['Mot de passe', 'Code Pin'];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  typeAuthControl = new FormControl('', [
    Validators.required,
  ]);
  equipes = new FormControl('', [
    Validators.required,
  ]);
  passwordControl = new FormControl('', [
    Validators.required,

  ]);

  nameControl = new FormControl('', [
    Validators.required,
  ]);
  roles = new FormControl('', [
    Validators.required,
  ]);
  prenomControl = new FormControl('', [
    Validators.required,
  ]);
  usernameControl = new FormControl('', [
    Validators.required,
  ]);
  numTelephoneControl = new FormControl('', [
    Validators.required,
  ]);
  hide=true;
  getAllRoles() {
    return this.roleService.getAllRole().subscribe(data => {
      this.roleList=data;

    })
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.addUserGroup.controls;
  }
  getAllEquipe() {
    return this.equipeService.getAllEquipe().subscribe(data => {
      this.equipeList=data;
    })
  }
  addUser()
  {
    this.spinner.show();
    this.addUserFrorm.firstName = this.nameControl.value;
    this.addUserFrorm.lastName = this.prenomControl.value;
    this.addUserFrorm.username = this.usernameControl.value;
    this.addUserFrorm.email = this.emailFormControl.value;
    this.addUserFrorm.authorities = this.roles.value;
    this.addUserFrorm.equipe = this.equipes.value;
    this.addUserFrorm.password = this.passwordControl.value;
    this.addUserFrorm.numTelephone = this.numTelephoneControl.value;
    if (this.typeAuthControl.value == 'Code Pin')
    {
      this.addUserFrorm.codePin=true
    }else {
      this.addUserFrorm.codePin=false
    }
    console.log(this.addUserFrorm)
    console.log(this.addUserGroup)
    this.userService.addUser(this.addUserFrorm).subscribe(data => {
      if (data.message === 'success') {
        this.messageService.add({severity:'success', summary:'Ajouter utilisateur', detail:'L\'utilisateur est ajouté avec success'});
      } else if (data.message === 'login exist') {
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Via MessageService'});

      } else {
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Via MessageService'});

      }
    })
  }

}
