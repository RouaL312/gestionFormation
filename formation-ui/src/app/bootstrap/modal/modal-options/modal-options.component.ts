import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalOptionsComponent implements OnInit {

  closeResult: string = '';

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content: any) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  ngOnInit(): void {
  }

}
