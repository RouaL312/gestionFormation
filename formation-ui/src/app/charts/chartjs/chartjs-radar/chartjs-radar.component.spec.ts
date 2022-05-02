import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsRadarComponent } from './chartjs-radar.component';

describe('ChartjsRadarComponent', () => {
  let component: ChartjsRadarComponent;
  let fixture: ComponentFixture<ChartjsRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsRadarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
