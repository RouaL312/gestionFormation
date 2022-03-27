import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerAdapterComponent } from './timepicker-adapter.component';

describe('TimepickerAdapterComponent', () => {
  let component: TimepickerAdapterComponent;
  let fixture: ComponentFixture<TimepickerAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerAdapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
