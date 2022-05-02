import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerKeyboardComponent } from './datepicker-keyboard.component';

describe('DatepickerKeyboardComponent', () => {
  let component: DatepickerKeyboardComponent;
  let fixture: ComponentFixture<DatepickerKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
