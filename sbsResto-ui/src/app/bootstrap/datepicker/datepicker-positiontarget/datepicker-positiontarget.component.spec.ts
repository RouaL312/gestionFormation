import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerPositiontargetComponent } from './datepicker-positiontarget.component';

describe('DatepickerPositiontargetComponent', () => {
  let component: DatepickerPositiontargetComponent;
  let fixture: ComponentFixture<DatepickerPositiontargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerPositiontargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerPositiontargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
