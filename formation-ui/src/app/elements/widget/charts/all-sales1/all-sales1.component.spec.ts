import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSales1Component } from './all-sales1.component';

describe('AllSales1Component', () => {
  let component: AllSales1Component;
  let fixture: ComponentFixture<AllSales1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSales1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSales1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
