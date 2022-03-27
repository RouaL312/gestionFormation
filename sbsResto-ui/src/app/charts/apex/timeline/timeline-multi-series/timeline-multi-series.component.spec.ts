import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMultiSeriesComponent } from './timeline-multi-series.component';

describe('TimelineMultiSeriesComponent', () => {
  let component: TimelineMultiSeriesComponent;
  let fixture: ComponentFixture<TimelineMultiSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineMultiSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMultiSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
