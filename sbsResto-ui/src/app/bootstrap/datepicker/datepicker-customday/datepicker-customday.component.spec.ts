import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomdayComponent } from './datepicker-customday.component';

describe('DatepickerCustomdayComponent', () => {
  let component: DatepickerCustomdayComponent;
  let fixture: ComponentFixture<DatepickerCustomdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerCustomdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerCustomdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
