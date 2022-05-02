import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerBasicComponent } from './datepicker-basic.component';

describe('DatepickerBasicComponent', () => {
  let component: DatepickerBasicComponent;
  let fixture: ComponentFixture<DatepickerBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
