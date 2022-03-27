import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerSpinnersComponent } from './timepicker-spinners.component';

describe('TimepickerSpinnersComponent', () => {
  let component: TimepickerSpinnersComponent;
  let fixture: ComponentFixture<TimepickerSpinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerSpinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
