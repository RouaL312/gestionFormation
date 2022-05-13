import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../model/User";
import {MatTableDataSource} from "@angular/material/table";
import {LocalStorageService} from "ngx-webstorage";
import {UserService} from "../shared/service/User.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {RoleService} from "../shared/service/role.service";
import {Role} from "../model/Role";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "../model/Validation";
import {MatCheckboxChange} from "@angular/material/checkbox";


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
  checked: boolean = false;
  password: any;
  openpopup: boolean = false;
  //FormControl
  usernameControl = new FormControl('', [
    Validators.required,
  ]);
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


  ngOnInit(): void {
    this.getAllUsers();
  }

  onAffichePWD(ob: MatCheckboxChange) {
    this.checked = ob.checked;
  }

  open(content: any) {
    this.modalService.open(content, {size: 'lg'});
  }

  getAllUsers() {
    return this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
      USERS = this.users
    })
  }

  getAllRoles() {
    return this.roleService.getAllRole().subscribe(data => {
      this.roleList = data;
    })
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.UserGroup.controls;
  }

  changePasswordType() {
    this.f.passwordControl.setValue('');
  }

  editUser(user: User) {

    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup=true;
    } else {
      this.openpopup=true;
    }
    this.title = 'Modifier Utlisateur';
    this.user = {...user};
    this.displayEdit = true;
    this.displayAdd = false;
    this.checked = false;
    this.UserGroup = this.formBuilder.group({
      usernameControl: [this.user.username, Validators.required],
      emailControl: [this.user.email, [Validators.required, Validators.email]],
      prenomControl: [this.user.lastName, Validators.required],
      passwordControl: ['', Validators.required],
      nameControl: [this.user.firstName, Validators.required],
      authoritiesControl: [this.user.authorities, Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: [Validation.match('passwordControl', 'confirmPassword')]
    });
    if (user.codePin) {
      this.typeAuthControl.setValue("Code Pin")
    } else {
      this.typeAuthControl.setValue("Mot de passe")
    }
    this.getAllRoles()
  }

  saveEditUser(user: User) {
    if (this.checked) {
      user.password = this.password;
    } else {
      this.UserGroup.controls.passwordControl.setValue(user.password)
      this.UserGroup.controls.confirmPassword.setValue(user.password)
    }
    if (this.UserGroup.valid) {
      user.firstName = this.f.nameControl.value;
      user.lastName = this.f.prenomControl.value;
      user.username = this.f.usernameControl.value;
      user.email = this.f.emailControl.value;
      user.authorities = this.f.authoritiesControl.value;
      this.displayEdit = true
      user.codePin = this.typeAuthControl.value == "Code Pin";
      console.log(user)
      this.userService.addUser(user).subscribe(data => {
        this.messageService.add({
          severity: 'success',
          summary: 'Modifier utilisateur',
          detail: 'L\'utilisateur est modifié avec success'
        });

      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Probléme ajout utilisateur',
          detail: 'Impossible de modifier l\'utilisateur'
        });
      })
      console.log(user)
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout utilisateur',
        detail: 'Vérifier votre données'
      });
      return;
    }
    this.hideDialog();
    this.ngOnInit();
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer l\'utilisateur ' + user.username + '?',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (user.id != null) {
          this.userService.deleteUser(user.id).subscribe(data => {
            this.hideDialog();
            this.ngOnInit();
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

  comparer(o1: any, o2: any): boolean {
    // if possible compare by object's name, and not by reference.
    return o1 && o2 ? o1.name === o2.name : o2 === o2;
  }

  addUser() {
    this.displayAdd = true;
    this.displayEdit = false;
    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup=true;
    } else {
      this.openpopup=true;
    }
    this.checked = true;
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

    this.title = 'Ajouter Utlisateur';
    this.typeAuthControl.setValue('Code Pin')
    this.getAllRoles()
  }

  saveNewUser() {
    if (this.UserGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout utilisateur',
        detail: 'Vérifier votre formulaire'
      });
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
      this.users = this.users.filter(val => {
        return true;
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout utilisateur',
        detail: 'Impossible d\'ajouter l\'utilisateur'
      });
    })
    this.hideDialog();
    this.ngOnInit();
  }

  hideDialog() {
    this.openpopup=false;
    this.displayEdit = false;
    this.displayAdd = false;
  }
}
