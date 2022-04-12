import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "../../shared/service/auth.service";
import {Router} from "@angular/router";
import {Role} from "../../model/Role";
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
	constructor(private authService: AuthService, private router: Router,private modalService: NgbModal ,private localStorageService:LocalStorageService) { }

	ngOnInit(): void {
    // @ts-ignore
    this.username=JSON.parse(localStorage.getItem("login"));
    this.roles=JSON.parse(<string>localStorage.getItem('roles'));
    console.log(this.roles[0].name)
	}

  logout() {
    this.authService.logout().then(data => {
      if (data) {
        localStorage.clear();
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
