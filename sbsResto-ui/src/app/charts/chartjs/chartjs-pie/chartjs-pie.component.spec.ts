import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsPieComponent } from './chartjs-pie.component';

describe('ChartjsPieComponent', () => {
  let component: ChartjsPieComponent;
  let fixture: ComponentFixture<ChartjsPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
