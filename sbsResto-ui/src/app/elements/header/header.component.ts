import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/service/auth.service";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {

  toggleChat: boolean = true;
  toggleSingle: boolean = true;
  username!: String;
  roles!:[];

  constructor(private router: Router, private authService: AuthService,private modalService: NgbModal,private localStorageService:LocalStorageService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.username=localStorage.getItem("username");
    // @ts-ignore
    this.roles=JSON.parse(localStorage.getItem("roles").split(','));
    //this.username=this.localStorageService.retrieve('username');
    console.log(this.localStorageService);
  }


  togglechatbar() {
    this.toggleChat = !this.toggleChat;
  }

  singleChatWindow() {
    this.toggleSingle = !this.toggleSingle;
  }

  logout() {
    localStorage.clear();
    //this.authService.logout();
    this.router.navigateByUrl('login')
  }
}
