import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientLineChartComponent } from './gradient-line-chart.component';

describe('GradientLineChartComponent', () => {
  let component: GradientLineChartComponent;
  let fixture: ComponentFixture<GradientLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
