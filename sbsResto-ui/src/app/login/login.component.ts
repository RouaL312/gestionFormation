import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SoundService} from "../shared/service/sound.service";
import {VersionService} from "../shared/service/version.service";
import {LoginPayload} from "../model/loginPayload";
import {Version} from "../model/Version";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";
import {MatKeyboardComponent, MatKeyboardRef, MatKeyboardService} from "angular-onscreen-material-keyboard";
import {Subscription} from "rxjs";
import {AuthService} from "../shared/service/auth.service";
import {Role} from "../model/Role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginPayload: LoginPayload;
  username: any;
  version!: Version;
  loginGroup: FormGroup;
  userWithCodepin!: boolean;
  userWithPassword!: boolean;
  toggleEye: boolean = true;
  _keyboardRef: MatKeyboardRef<MatKeyboardComponent> | undefined;
  _enterSubscription: Subscription | undefined;
  hide = true;
  hideCode = true;

  constructor(private authService: AuthService,private modalService: NgbModal, private router: Router, private soundService: SoundService, private versionService: VersionService, private _keyboardService: MatKeyboardService) {
    this.loginPayload = new class implements LoginPayload {
      username: string | undefined;
      password: string | undefined;

    };
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })

  }

  toggleEyeIcon(inputPassword: any) {
    this.toggleEye = !this.toggleEye;
    console.log(inputPassword.type);
    inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';


  }

  ngOnInit(): void {
  }

  private data = '';
  userNameControle = new FormControl({value: this.data, disabled: false});
  passwordControle = new FormControl({value: this.data, disabled: false});
  codePinControle = new FormControl({value: this.data, disabled: false});

  closeCurrentKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }

    if (this._enterSubscription) {
      this._enterSubscription.unsubscribe();
    }
  }

  // this called only if user entered full code
  loginPin(code: string) {
    this.loginPayload.username = this.userNameControle.value;
    this.loginPayload.password = code;
    if (this.loginPayload.username && this.loginPayload.password) {
      return this.authService.login(this.loginPayload).subscribe(data => {
        localStorage.setItem('authResponse', JSON.stringify(data))
        let roles: Role[];
        roles = [];
        roles = data.authorities;
        if (roles.filter(value => value.name === 'ADMIN' || value.name === 'SERVEUR').length > 0) {        this.router.navigateByUrl('/admin/index');
        this.soundService.playAudio('../assets/sounds/intro.wav')
        }
      })
    } else {
      return;
    }
  }

  login() {
    if (this.userWithPassword)
      this.loginPayload.password = this.passwordControle.value;
    if (this.userWithCodepin)
      this.loginPayload.password = this.codePinControle.value;

    this.loginPayload.username = this.userNameControle.value;

    if (this.loginPayload.username && this.loginPayload.password) {
      return this.authService.login(this.loginPayload).subscribe(data => {
        localStorage.setItem('authResponse', JSON.stringify(data))
        let roles: Role[];
        roles = [];
        roles = data.authorities;
        if (roles.filter(value => value.name === 'ADMIN' || value.name === 'SERVEUR').length > 0) {
          this.router.navigateByUrl('admin');
          this.soundService.playAudio('../assets/sounds/intro.wav');
          this.closeCurrentKeyboard();
        }
      })
    } else {
      return;
    }
  }

  checkLogin(login: string) {
    return this.authService.getUserByLogin(login).subscribe(data => {
      if (data != null) {
        if (!data.codePin) {
          this.userWithPassword = true;
          this.userWithCodepin = false;

        } else {
          this.userWithPassword = false;
          this.userWithCodepin = true;
        }
      }

    })
  }

  checkCodePassword() {
    this.passwordControle.setValue("");
    this.codePinControle.setValue("");
    if (!this.hide)
      this.hide = true;
    if (!this.hideCode)
      this.hideCode = true;

    this.userWithPassword = false;
    this.userWithCodepin = false;
  }
}
