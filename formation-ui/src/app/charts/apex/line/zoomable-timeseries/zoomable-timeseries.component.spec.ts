import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableTimeseriesComponent } from './zoomable-timeseries.component';

describe('ZoomableTimeseriesComponent', () => {
  let component: ZoomableTimeseriesComponent;
  let fixture: ComponentFixture<ZoomableTimeseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomableTimeseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomableTimeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
