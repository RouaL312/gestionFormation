import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerI18nComponent } from './datepicker-i18n.component';

describe('DatepickerI18nComponent', () => {
  let component: DatepickerI18nComponent;
  let fixture: ComponentFixture<DatepickerI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerI18nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
