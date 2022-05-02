import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerActionButtonsComponent } from './datepicker-action-buttons.component';

describe('DatepickerActionButtonsComponent', () => {
  let component: DatepickerActionButtonsComponent;
  let fixture: ComponentFixture<DatepickerActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerActionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
