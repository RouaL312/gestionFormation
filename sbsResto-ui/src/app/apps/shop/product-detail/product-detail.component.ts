import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
  
  imageSrc = 'assets/images/product/1.jpg';
  
  sizeClass = "";

  ngOnInit(): void {
  }
  
  onClick(imagename:any) {
    this.imageSrc = "assets/images/product/"+imagename;
  }
  
	open(content:any) {
		this.modalService.open(content);
	}
    
    toggleSizeClass(size:any) {
        this.sizeClass = size;
    }

}
