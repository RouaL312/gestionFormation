import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRateComponent } from './glucose-rate.component';

describe('GlucoseRateComponent', () => {
  let component: GlucoseRateComponent;
  let fixture: ComponentFixture<GlucoseRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlucoseRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucoseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
