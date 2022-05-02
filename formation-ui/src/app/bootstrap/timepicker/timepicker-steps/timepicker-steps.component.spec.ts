import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerStepsComponent } from './timepicker-steps.component';

describe('TimepickerStepsComponent', () => {
  let component: TimepickerStepsComponent;
  let fixture: ComponentFixture<TimepickerStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
