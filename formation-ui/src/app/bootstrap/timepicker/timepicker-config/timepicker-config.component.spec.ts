import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerConfigComponent } from './timepicker-config.component';

describe('TimepickerConfigComponent', () => {
  let component: TimepickerConfigComponent;
  let fixture: ComponentFixture<TimepickerConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
