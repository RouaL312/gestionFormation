import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerSecondsComponent } from './timepicker-seconds.component';

describe('TimepickerSecondsComponent', () => {
  let component: TimepickerSecondsComponent;
  let fixture: ComponentFixture<TimepickerSecondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerSecondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerSecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
