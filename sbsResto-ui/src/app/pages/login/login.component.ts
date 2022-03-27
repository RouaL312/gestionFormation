import {Component, ElementRef, Inject, InjectionToken, Input, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {
  IKeyboardLayout,
  MAT_KEYBOARD_LAYOUTS, MatKeyboardComponent,
  MatKeyboardRef,
  MatKeyboardService
} from "angular-onscreen-material-keyboard";
import {BehaviorSubject, Subscription} from "rxjs";
import {ControlValueAccessor,NG_VALUE_ACCESSOR, FormControl, FormGroup, NgControl, NgForm, NgModel} from "@angular/forms";
import {AuthService} from "../../shared/service/auth.service";
import {Router} from "@angular/router";
import {SoundService} from "../../shared/service/sound.service";
import {VersionService} from "../../shared/service/version.service";
import {LoginPayload} from "../../model/loginPayload";
import {Version} from "../../model/Version";

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
  playerName!:string
  _keyboardRef: MatKeyboardRef<MatKeyboardComponent> |undefined;
  _enterSubscription: Subscription |undefined;
  constructor(private authService: AuthService, private router: Router, private soundService: SoundService, private versionService: VersionService,private _keyboardService: MatKeyboardService) {
    this.loginPayload = new class implements LoginPayload {
      username: string | undefined;
      password: string | undefined;

    };
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })

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
    this.loginPayload.username=this.userNameControle.value;
    this.loginPayload.password = code;
    if (this.loginPayload.username && this.loginPayload.password) {
      return this.authService.login(this.loginPayload).subscribe(data => {
        localStorage.setItem('authResponse', JSON.stringify(data))
        let roles = [];
        roles = data.roles;
        if (roles.filter(name => name !== 'ADMIN' || name !== 'SUPER_ADMIN').length > 0) {
          this.router.navigateByUrl('/admin/index');
          this.soundService.playAudio('../../assets/sounds/intro.wav')
        }
      })
    } else {
      return;
    }
  }
  login() {
    this.loginPayload.password = this.passwordControle.value;
    this.loginPayload.username = this.userNameControle.value;

    if (this.loginPayload.username && this.loginPayload.password) {
      return this.authService.login(this.loginPayload).subscribe(data => {
        localStorage.setItem('authResponse', JSON.stringify(data))
        let roles = [];
        roles = data.roles;
        if (roles.filter(name => name === 'ADMIN' || name === 'SUPER_ADMIN').length > 0) {
          this.router.navigateByUrl('/admin/index');
          this.soundService.playAudio('../../assets/sounds/intro.wav');
          this.closeCurrentKeyboard();

        }
      })
    } else {
      return;
    }
  }
}
