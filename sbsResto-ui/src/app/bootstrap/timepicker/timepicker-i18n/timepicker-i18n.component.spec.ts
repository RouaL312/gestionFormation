import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerI18nComponent } from './timepicker-i18n.component';

describe('TimepickerI18nComponent', () => {
  let component: TimepickerI18nComponent;
  let fixture: ComponentFixture<TimepickerI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerI18nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
