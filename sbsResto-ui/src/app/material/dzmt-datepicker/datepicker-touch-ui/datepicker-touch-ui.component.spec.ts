import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTouchUiComponent } from './datepicker-touch-ui.component';

describe('DatepickerTouchUiComponent', () => {
  let component: DatepickerTouchUiComponent;
  let fixture: ComponentFixture<DatepickerTouchUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerTouchUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerTouchUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
