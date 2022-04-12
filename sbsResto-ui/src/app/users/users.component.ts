import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../model/User";
import {MatTableDataSource} from "@angular/material/table";
import {LocalStorageService} from "ngx-webstorage";
import {UserService} from "../shared/service/User.service";


let USERS: User[] = [];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']

})
export class UsersComponent implements OnInit {

  page = 1;
  pageSize = 5;
  collectionSize = USERS.length;
  users!: User[];
  displayMaximizable!: boolean;

  constructor(private modalService: NgbModal, private userService: UserService, private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  getAllUsers() {
    return this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      USERS = this.users
      this.collectionSize = USERS.length;
      this.updateUserListing();
    })
  }


  updateUserListing() {
    this.users = USERS
      .map((user, i) => ({id: i + 1, ...user}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  onRowEditInit(product: User) {
    // this.clonedProducts[product.id] = {...product};
  }

  onRowEditSave(product: User) {
    // if (product.price > 0) {
    //   delete this.clonedProducts[product.id];
    //   this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    // }
    // else {
    //   this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
    // }
  }

  onRowEditCancel(product: User, index: number) {
    // this.users[index] = this.clonedProducts[product.id];
    // delete this.clonedProducts[product.id];
  }
}
