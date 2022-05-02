import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMultipleComponent } from './datepicker-multiple.component';

describe('DatepickerMultipleComponent', () => {
  let component: DatepickerMultipleComponent;
  let fixture: ComponentFixture<DatepickerMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
