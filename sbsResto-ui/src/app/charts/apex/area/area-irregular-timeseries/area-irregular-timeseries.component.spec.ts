import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaIrregularTimeseriesComponent } from './area-irregular-timeseries.component';

describe('AreaIrregularTimeseriesComponent', () => {
  let component: AreaIrregularTimeseriesComponent;
  let fixture: ComponentFixture<AreaIrregularTimeseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaIrregularTimeseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaIrregularTimeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
