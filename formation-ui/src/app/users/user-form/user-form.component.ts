import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {RoleService} from "../../shared/service/role.service";
import {Role} from "../../model/Role";
import {User} from "../../model/User";
import {NgxSpinnerService} from "ngx-spinner";
import {MessageService} from 'primeng/api';
import {UserService} from "../../shared/service/User.service";
import validate = WebAssembly.validate;
import Validation from "../../model/Validation";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
    addUserGroup!: FormGroup;
    addUserForm!: User;

    constructor(private formBuilder: FormBuilder, private roleService: RoleService, private spinner: NgxSpinnerService, private messageService: MessageService, private userService: UserService) {

        this.addUserGroup = this.formBuilder.group({
            usernameControl: ['', Validators.required],
            emailControl: ['', [Validators.required, Validators.email]],
            prenomControl: ['', Validators.required],
            passwordControl: ['',Validators.required],
            nameControl: ['', Validators.required],
            authoritiesControl: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validators: [Validation.match('passwordControl', 'confirmPassword')]
        });

        this.addUserForm = {
            id: undefined,
            firstName: '',
            lastName: '',
            email: '',
            login: '',
            password: '',
            authorities: undefined,
            codePin: true,
        }
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
    usernameControl = new FormControl('', [
        Validators.required,
    ]);


    // convenience getter for easy access to form fields
    get f(): { [key: string]: AbstractControl } {
        return this.addUserGroup.controls;
    }

//   checkPasswords() {
//   const pass = this.passwordControl.value;
//   const confirmPass =this.confirmPassword.value;
//
//   return pass === confirmPass ? null : { notSame: true };
// }
    ngOnInit(): void {

        this.getAllRoles();
        this.typeAuthControl.setValue("Code Pin")
    }

    roleList: Role[] = [];
    submitted = false;
    authentication: string[] = ['Mot de passe', 'Code Pin'];

    hide = true;

    getAllRoles() {
        return this.roleService.getAllRole().subscribe(data => {
            this.roleList = data;

        })
    }



    addUser() {
        if (this.addUserGroup.invalid) {
            console.log(JSON.stringify(this.addUserGroup.value, null, 2));
            this.addUserForm.email = this.f.emailControl.value;
            return;
        }
        this.addUserForm.firstName = this.f.nameControl.value;
        this.addUserForm.lastName = this.f.prenomControl.value;
        this.addUserForm.login = this.f.usernameControl.value;
        this.addUserForm.email = this.f.emailControl.value;
        this.addUserForm.authorities = this.f.authoritiesControl.value;
        this.addUserForm.password = this.f.passwordControl.value;
        this.addUserForm.codePin = this.typeAuthControl.value == "Code Pin";
        console.log(this.addUserForm);
        this.userService.addUser(this.addUserForm).subscribe(data => {
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

    changePasswordType() {
        this.f.passwordControl.setValue('');
    }
}
