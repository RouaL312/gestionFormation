import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsDoughnutComponent } from './chartjs-doughnut.component';

describe('ChartjsDoughnutComponent', () => {
  let component: ChartjsDoughnutComponent;
  let fixture: ComponentFixture<ChartjsDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsDoughnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
