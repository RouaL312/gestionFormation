import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "../../shared/service/auth.service";
import {Router} from "@angular/router";
import {Role} from "../../model/Role";
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";
import {LocalStorageService} from "ngx-webstorage";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
	providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {

	toggleChat: boolean = true;
	toggleSingle: boolean = true;
  username!: String;
  roles!:Role[];

	constructor(private authService: AuthService, private router: Router,
              public title: Title, private localStorageService: LocalStorageService) { }
  ngOnInit(): void {
    // @ts-ignore
    this.username = this.localStorageService.retrieve("login");
    this.roles = this.localStorageService.retrieve('roles');
  }

  logout() {
    this.authService.logout().then(data => {
      if (data) {
        this.localStorageService.clear();
        this.authService.token = null;
        this.router.navigateByUrl('/login');
      }
    })
  }

	togglechatbar() {
		this.toggleChat = !this.toggleChat;
	}
	singleChatWindow() {
		this.toggleSingle = !this.toggleSingle;
	}


}

var stringToHTML = function (str: string) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};

