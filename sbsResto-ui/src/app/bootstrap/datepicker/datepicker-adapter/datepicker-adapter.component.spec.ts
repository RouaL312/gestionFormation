import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerAdapterComponent } from './datepicker-adapter.component';

describe('DatepickerAdapterComponent', () => {
  let component: DatepickerAdapterComponent;
  let fixture: ComponentFixture<DatepickerAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerAdapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
