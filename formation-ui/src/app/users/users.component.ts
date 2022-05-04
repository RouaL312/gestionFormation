import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../model/User";
import {MatTableDataSource} from "@angular/material/table";
import {LocalStorageService} from "ngx-webstorage";
import {UserService} from "../shared/service/User.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {RoleService} from "../shared/service/role.service";
import {Role} from "../model/Role";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "../model/Validation";


let USERS: User[] = [];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']

})
export class UsersComponent implements OnInit {
  hide = true;
  page = 1;
  users!: User[];
  user!: User;
  displayAdd!: boolean;
  displayEdit!: boolean;
  submitted!: boolean;
  roleList: Role[] = [];
  authentication: string[] = ['Mot de passe', 'Code Pin'];
  UserGroup!: FormGroup;
  UserForm!: User;
  title!: string;

  constructor(private modalService: NgbModal, private userService: UserService, private formBuilder: FormBuilder,
              private localStorageService: LocalStorageService, private confirmationService: ConfirmationService,
              private messageService: MessageService, private roleService: RoleService) {
    this.UserGroup = this.formBuilder.group({
      usernameControl: ['', Validators.required],
      emailControl: ['', [Validators.required, Validators.email]],
      prenomControl: ['', Validators.required],
      passwordControl: ['', Validators.required],
      nameControl: ['', Validators.required],
      authoritiesControl: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: [Validation.match('passwordControl', 'confirmPassword')]
    });
    this.UserForm = {
      id: undefined,
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      authorities: undefined,
      codePin: true,
    }
  }

  usernameControl = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit(): void {
    this.getAllUsers();
  }

  open(content: any) {
    this.modalService.open(content, {size: 'lg'});
  }

  getAllUsers() {
    return this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      USERS = this.users
    })
  }

  typeAuthControl = new FormControl('', [
    Validators.required,
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
  ]);
  confirmPassword = new FormControl('', [
    Validators.required,

  ]);
  nameControl = new FormControl('', [
    Validators.required,
  ]);
  authoritiesControl = new FormControl('', [
    Validators.required,
  ]);
  prenomControl = new FormControl('', [
    Validators.required,
  ]);

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.UserGroup.controls;
  }

  changePasswordType() {
    this.f.passwordControl.setValue('');
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer l\'utilisateur ' + user.username + '?',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (user.id != null) {
          this.userService.deleteUser(user.id).subscribe(data => {
            console.log(JSON.stringify(data.message))
            if (JSON.stringify(data.message == "success")) {
              this.users = this.users.filter(val => val.id !== user.id);

              this.messageService.add({severity: 'success', summary: 'Successful', detail: data.message, life: 1000});
            } else {
              this.messageService.add({severity: 'error', summary: 'Probléme de suppression', detail: data.message});
            }
          })
        }
      }
    });
  }

  saveEditUser(user: User) {
    this.displayEdit = true
    user.codePin = this.typeAuthControl.value == "Code Pin";
    console.log(user);
    this.userService.addUser(user).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter utilisateur',
        detail: 'L\'utilisateur est modifié avec success'
      });
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout utilisateur',
        detail: 'Impossible de modifier l\'utilisateur'
      });
    })
  }

  editUser(user: User) {
    this.title='Modifier Utlisateur';
    this.user = {...user};
    this.displayEdit = true;
    this.displayAdd = false;
    this.UserGroup = this.formBuilder.group({
      usernameControl: [this.user.username, Validators.required],
      emailControl: [this.user.email, [Validators.required, Validators.email]],
      prenomControl: [this.user.lastName, Validators.required],
      passwordControl: ['', Validators.required],
      nameControl: [this.user.firstName, Validators.required],
      authoritiesControl: [this.user.authorities!.name, Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: [Validation.match('passwordControl', 'confirmPassword')]
    });
    console.log(this.UserGroup)
    if (user.codePin) {
      this.typeAuthControl.setValue("Code Pin")
    } else {
      this.typeAuthControl.setValue("Mot de passe")

    }

    this.getAllRoles()
  }

  addUser() {
    this.UserGroup = this.formBuilder.group({
      usernameControl: ['', Validators.required],
      emailControl: ['', [Validators.required, Validators.email]],
      prenomControl: ['', Validators.required],
      passwordControl: ['', Validators.required],
      nameControl: ['', Validators.required],
      authoritiesControl: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: [Validation.match('passwordControl', 'confirmPassword')]
    });
    this.displayAdd = true;
    this.displayEdit = false;
    this.title='Ajouter Utlisateur';
    this.typeAuthControl.setValue('Code Pin')
    this.getAllRoles()
  }

  showMaximizableDialog() {
    this.displayAdd = true;
    this.submitted = false;
  }

  getAllRoles() {
    return this.roleService.getAllRole().subscribe(data => {
      this.roleList = data;

    })
  }

  comparer(o1: any, o2: any): boolean {
    // if possible compare by object's name, and not by reference.
    return o1 && o2 ? o1.label === o2.label : o2 === o2;
  }

  saveNewUser() {
    if (this.UserGroup.invalid) {
      console.log(JSON.stringify(this.UserGroup.value, null, 2));
      return;
    }
    this.UserForm.firstName = this.f.nameControl.value;
    this.UserForm.lastName = this.f.prenomControl.value;
    this.UserForm.username = this.f.usernameControl.value;
    this.UserForm.email = this.f.emailControl.value;
    this.UserForm.authorities = this.f.authoritiesControl.value;
    this.UserForm.password = this.f.passwordControl.value;
    this.UserForm.codePin = this.typeAuthControl.value == "Code Pin";
    console.log(this.UserForm);
    this.userService.addUser(this.UserForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter utilisateur',
        detail: 'L\'utilisateur est ajouté avec success'
      });
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout utilisateur',
        detail: 'Impossible d\'ajouter l\'utilisateur'
      });
    })
  }

}
