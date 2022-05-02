import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-as-accordion',
  templateUrl: './expansion-as-accordion.component.html',
  styleUrls: ['./expansion-as-accordion.component.css']
})
export class ExpansionAsAccordionComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
