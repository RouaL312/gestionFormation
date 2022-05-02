import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDisabledComponent } from './datepicker-disabled.component';

describe('DatepickerDisabledComponent', () => {
  let component: DatepickerDisabledComponent;
  let fixture: ComponentFixture<DatepickerDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
