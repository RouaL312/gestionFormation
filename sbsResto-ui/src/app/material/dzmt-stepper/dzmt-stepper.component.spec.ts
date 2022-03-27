import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtStepperComponent } from './dzmt-stepper.component';

describe('DzmtStepperComponent', () => {
  let component: DzmtStepperComponent;
  let fixture: ComponentFixture<DzmtStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
