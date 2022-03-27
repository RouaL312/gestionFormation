import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapColorRangeComponent } from './heatmap-color-range.component';

describe('HeatmapColorRangeComponent', () => {
  let component: HeatmapColorRangeComponent;
  let fixture: ComponentFixture<HeatmapColorRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapColorRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapColorRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
