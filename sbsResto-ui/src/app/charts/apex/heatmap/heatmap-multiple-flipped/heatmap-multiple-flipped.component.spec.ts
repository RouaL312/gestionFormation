import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapMultipleFlippedComponent } from './heatmap-multiple-flipped.component';

describe('HeatmapMultipleFlippedComponent', () => {
  let component: HeatmapMultipleFlippedComponent;
  let fixture: ComponentFixture<HeatmapMultipleFlippedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapMultipleFlippedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapMultipleFlippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
