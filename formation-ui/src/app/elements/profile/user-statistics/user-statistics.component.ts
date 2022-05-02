 import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css']
})
export class UserStatisticsComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  
	open(content:any) {
		this.modalService.open(content);
	}

}
