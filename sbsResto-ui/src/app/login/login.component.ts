import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../shared/service/auth.service";
import {LoginPayload} from "../model/loginPayload";
import {Router} from "@angular/router";
import {SoundService} from "../shared/service/sound.service";
import {VersionService} from "../shared/service/version.service";
import {Version} from "../model/Version";
import {LoginForm} from "../model/LoginForm";
import {FormControl, FormGroup, NgControl, NgModel} from "@angular/forms";
import {map} from "rxjs/operators";
import {
  IKeyboardLayout,
  MatKeyboardComponent,
  MatKeyboardRef,
  MatKeyboardService
} from "angular-onscreen-material-keyboard";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginPayload: LoginPayload;
  username: any;
  version: Version | undefined;
  loginGroup: FormGroup;
  codeInput:String|undefined;
  pin: number | undefined;
  _keyboardRef: MatKeyboardRef<MatKeyboardComponent> |undefined;
  @ViewChild('codeInput', { read: ElementRef })
  private _attachToElement: ElementRef|undefined;

  @ViewChild('codeInput', { read: NgModel })
  private _attachToControl: NgControl|undefined;
  @ViewChild('code', { read: ElementRef })
  private code: ElementRef|undefined;
  private _submittedForms = new BehaviorSubject<{ control: string, value: string }[][]>([]);
  _enterSubscription: Subscription |undefined;
  layout: string |undefined;
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

  ngOnInit(): void
  {
    this.getVersion();
    this.codeInput="1111";
  }

  private getVersion() {
    return this.versionService.getVersion().subscribe(data => {
      this.version = data;
    })
  }

  closeCurrentKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }

    if (this._enterSubscription) {
      this._enterSubscription.unsubscribe();
    }
  }
  // this called every time when user changed the code
  onCodeChanged(code: string) {
    ;
  }

  openKeyboard(locale:string) {
    this.code=this._attachToControl?.value;

    console.log(this._submittedForms.getValue());
    this._keyboardRef = this._keyboardService.open(locale, {
    });
    this._enterSubscription = this._keyboardRef.instance.enterClick.subscribe((data) => {
      //this.submitForm();
    });
    // reference the input element

    if (this._attachToElement!=null) {
      this._keyboardRef.instance.setInputInstance(this._attachToElement);
    }

    // set control

    if (this._attachToControl!=null && this._attachToControl.control!=null   ) {

      this._keyboardRef.instance.attachControl(this._attachToControl.control);
    }
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    this.loginPayload.password = code;
    if (this.loginPayload.username && this.loginPayload.password) {
      return this.authService.login(this.loginPayload).subscribe(data => {
        localStorage.setItem('authResponse', JSON.stringify(data))
        let roles = [];
        roles = data.roles;
        if (roles.filter(name => name !== 'ADMIN' || name !== 'SUPER_ADMIN').length > 0) {
          this.router.navigateByUrl('');
          this.soundService.playAudio('../../assets/sounds/intro.wav')
          this.closeCurrentKeyboard();
        }
      })
    } else {
      return;
    }
  }

  login() {

    if (this.loginPayload.username && this.loginPayload.password) {
      return this.authService.login(this.loginPayload).subscribe(data => {
        localStorage.setItem('authResponse', JSON.stringify(data))
        let roles = [];
        roles = data.roles;
        if (roles.filter(name => name === 'ADMIN' || name === 'SUPER_ADMIN').length > 0) {
          this.router.navigateByUrl('');
          this.soundService.playAudio('../../assets/sounds/intro.wav');
          this.closeCurrentKeyboard();

        }
      })
    } else {
      return;
    }
  }
}
