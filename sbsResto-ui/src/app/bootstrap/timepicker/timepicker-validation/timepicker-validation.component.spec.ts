import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerValidationComponent } from './timepicker-validation.component';

describe('TimepickerValidationComponent', () => {
  let component: TimepickerValidationComponent;
  let fixture: ComponentFixture<TimepickerValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
