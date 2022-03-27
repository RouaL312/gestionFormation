import { Component, OnInit,ViewChild  } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert, NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-slefclosing',
  templateUrl: './alert-slefclosing.component.html',
  styleUrls: ['./alert-slefclosing.component.css']
})
export class AlertSlefclosingComponent implements OnInit {

  constructor() { }
	
 private _success = new Subject<string>();
	staticAlertClosed = false;
	successMessage = '';
	@ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;
	@ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

	ngOnInit(): void {
    setTimeout(() => this.staticAlert.close(), 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public changeSuccessMessage() { this._success.next(`${new Date()} - Message successfully changed.`); }
	
	
  

}
