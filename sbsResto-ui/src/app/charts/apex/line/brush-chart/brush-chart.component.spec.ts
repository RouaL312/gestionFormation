import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushChartComponent } from './brush-chart.component';

describe('BrushChartComponent', () => {
  let component: BrushChartComponent;
  let fixture: ComponentFixture<BrushChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrushChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
