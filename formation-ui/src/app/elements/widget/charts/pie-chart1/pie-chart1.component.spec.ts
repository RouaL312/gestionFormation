import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChart1Component } from './pie-chart1.component';

describe('PieChart1Component', () => {
  let component: PieChart1Component;
  let fixture: ComponentFixture<PieChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
