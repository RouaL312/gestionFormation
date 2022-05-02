import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustommonthComponent } from './datepicker-custommonth.component';

describe('DatepickerCustommonthComponent', () => {
  let component: DatepickerCustommonthComponent;
  let fixture: ComponentFixture<DatepickerCustommonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerCustommonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerCustommonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
