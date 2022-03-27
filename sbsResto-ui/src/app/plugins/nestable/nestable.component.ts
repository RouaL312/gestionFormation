import { Component, OnInit, ElementRef, Renderer2, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { NestableSettings } from './lib/nestable.models';

// export type template = {
    // itemTemplate?:any;
// }
@Component({
  selector: 'app-nestable',
  templateUrl: './nestable.component.html',
  styleUrls: ['./nestable.component.css']
})
export class NestableComponent implements OnInit {

    // @Output() template: any;
    
    // @Input() itemTemplate:any;
    
    // @ViewChild('itemTemplate') itemTemplate;
    
    // itemTemplate: any
    // template:any;
  // public template :any;
  public idCount = 13;
  public options = {
    fixedDepth: false
  } as NestableSettings;
  public list = [
    { 'id': 1 },
    {
      'expanded': true,
      'id': 2, 'children': [
        { 'id': 3 },
        { 'id': 4 },
        {
          'expanded': false,
          'id': 5, 'children': [
            { 'id': 6 },
            { 'id': 7 },
            { 'id': 8 }
          ]
        },
        { 'id': 9 },
        { 'id': 10 }
      ]
    },
    { 'id': 11 },
    {
      'id': 12,
      'children': [
        { 'id': 13 }
      ]
    },
    { 'id': 14 },
    { 'id': 15 }
  ];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.listen(this.el.nativeElement, 'listUpdated', e => {
      this.list = e.detail.list;
    });
  }

  public pushItem() {
    this.list.push({ id: ++this.idCount });
    this.list = [...this.list];
  }

  public toggleFixedDepth() {
    this.options.fixedDepth = !this.options.fixedDepth;
  }

  public drag(e:any) {
    console.log(e);
  }

  public drop(e:any) {
    console.log(e);
  }

  public onDisclosure(e:any) {
    console.log(e);
  }
  
  ngOnInit(): void {
  }

}
