import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperCustomizedStatesComponent } from './stepper-customized-states.component';

describe('StepperCustomizedStatesComponent', () => {
  let component: StepperCustomizedStatesComponent;
  let fixture: ComponentFixture<StepperCustomizedStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperCustomizedStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperCustomizedStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
