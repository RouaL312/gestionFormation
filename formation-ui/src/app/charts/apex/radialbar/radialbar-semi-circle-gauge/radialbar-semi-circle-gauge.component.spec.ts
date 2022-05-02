import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarSemiCircleGaugeComponent } from './radialbar-semi-circle-gauge.component';

describe('RadialbarSemiCircleGaugeComponent', () => {
  let component: RadialbarSemiCircleGaugeComponent;
  let fixture: ComponentFixture<RadialbarSemiCircleGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialbarSemiCircleGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialbarSemiCircleGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
