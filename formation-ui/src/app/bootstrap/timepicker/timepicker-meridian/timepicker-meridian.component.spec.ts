import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerMeridianComponent } from './timepicker-meridian.component';

describe('TimepickerMeridianComponent', () => {
  let component: TimepickerMeridianComponent;
  let fixture: ComponentFixture<TimepickerMeridianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerMeridianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerMeridianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
