import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsBubbleComponent } from './chartjs-bubble.component';

describe('ChartjsBubbleComponent', () => {
  let component: ChartjsBubbleComponent;
  let fixture: ComponentFixture<ChartjsBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
