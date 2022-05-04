import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SoundService} from "../shared/service/sound.service";
import {VersionService} from "../shared/service/version.service";
import {LoginPayload} from "../model/loginPayload";
import {Version} from "../model/Version";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../shared/service/auth.service";
import {Role} from "../model/Role";
import {LocalStorageService} from "ngx-webstorage";
import {Title} from "@angular/platform-browser";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginPayload: LoginPayload;
  username: any;
  version!: Version;
  userWithCodepin!: boolean;
  userWithPassword!: boolean;
  hide = true;
  hideCode = true;
  codeNumber = '';
  codepin!: string;

  private data = '';
  userNameControle = new FormControl({value: this.data, disabled: false});
  passwordControle = new FormControl({value: this.data, disabled: false});
  codePinControle = new FormControl({value: this.data, disabled: true}, Validators.maxLength(5));

  constructor(private authService: AuthService, private modalService: NgbModal, private router: Router,
              private soundService: SoundService, private versionService: VersionService, private title: Title,
              private localStorageService: LocalStorageService, private messageService: MessageService) {

    this.title.setTitle('login')
    this.loginPayload = new class implements LoginPayload {
      username: string | undefined;
      password: string | undefined;
    };

  }

  ngOnInit(): void {
  }

  login() {
    console.log('login')
    if (this.userWithPassword)
      this.loginPayload.password = this.passwordControle.value;
    if (this.userWithCodepin)
      this.loginPayload.password = this.codePinControle.value;
    this.loginPayload.username = this.userNameControle.value;
    if (this.loginPayload.username && this.loginPayload.password) {
      return this.authService.login(this.loginPayload).subscribe(data => {
        if (data != null) {
          this.localStorageService.store('authResponse', data)
          let roles: Role[] | undefined;
          roles = data.authorities;
          if (roles!.filter(value => value.name === 'SUPER_ADMIN' || value.name === 'ADMIN').length > 0) {

            this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
            this.router.navigateByUrl('admin');
            this.soundService.playAudio('../assets/sounds/intro.wav');
          }
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Mot de pass error',
            detail: 'Vous devez vérifier votre mot de passe'
          });
          if (this.userWithCodepin) {
            for (var i = 0; i < 4; i++) {
              this.deleteCodePin()
            }
          }

        }
      })
    } else {
      this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
      return;
    }
  }

  checkLogin(login: string) {
    return this.authService.getUserByLogin(login).subscribe(data => {
      console.log(data)
      if (data != null) {
        if (!data.codePin) {
          this.userWithPassword = true;
          this.userWithCodepin = false;
          this.codePinControle.setValue("");
          this.codeNumber = '';
        } else {
          this.userWithPassword = false;
          this.userWithCodepin = true;
          this.codePinControle.setValue("");
          this.codeNumber = '';
        }
      } else {
        this.messageService.add({severity: 'error', summary: 'Login error', detail: 'Vous devez vérifier votre login'});
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

  onClickNumPad(num: string) {
    if (this.codePinControle.value.length < 4) {
      this.codeNumber = this.codeNumber + num;
      this.codepin = this.codeNumber
      this.codePinControle.setValue(this.codepin)
    }
    if (this.codePinControle.value.length == 4) {
      this.login();
    }
  }

  deleteCodePin() {
    this.codePinControle.setValue(this.codePinControle.value.substr(0, this.codePinControle.value.length - 1));
    this.codeNumber = this.codeNumber.substr(0, this.codeNumber.length - 1)
  }

}
