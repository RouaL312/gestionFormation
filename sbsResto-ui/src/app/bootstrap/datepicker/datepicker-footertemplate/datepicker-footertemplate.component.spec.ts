import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFootertemplateComponent } from './datepicker-footertemplate.component';

describe('DatepickerFootertemplateComponent', () => {
  let component: DatepickerFootertemplateComponent;
  let fixture: ComponentFixture<DatepickerFootertemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerFootertemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerFootertemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
