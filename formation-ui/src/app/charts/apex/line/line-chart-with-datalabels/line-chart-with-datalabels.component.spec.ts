import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartWithDatalabelsComponent } from './line-chart-with-datalabels.component';

describe('LineChartWithDatalabelsComponent', () => {
  let component: LineChartWithDatalabelsComponent;
  let fixture: ComponentFixture<LineChartWithDatalabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartWithDatalabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartWithDatalabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
