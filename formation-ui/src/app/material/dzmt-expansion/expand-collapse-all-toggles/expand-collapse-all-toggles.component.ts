import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-expand-collapse-all-toggles',
  templateUrl: './expand-collapse-all-toggles.component.html',
  styleUrls: ['./expand-collapse-all-toggles.component.css']
})
export class ExpandCollapseAllTogglesComponent implements OnInit {

 @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
