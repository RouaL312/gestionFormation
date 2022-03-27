import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerOpenMethodComponent } from './datepicker-open-method.component';

describe('DatepickerOpenMethodComponent', () => {
  let component: DatepickerOpenMethodComponent;
  let fixture: ComponentFixture<DatepickerOpenMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerOpenMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerOpenMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
