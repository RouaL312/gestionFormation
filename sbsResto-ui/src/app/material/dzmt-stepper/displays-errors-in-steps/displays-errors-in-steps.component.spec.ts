import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysErrorsInStepsComponent } from './displays-errors-in-steps.component';

describe('DisplaysErrorsInStepsComponent', () => {
  let component: DisplaysErrorsInStepsComponent;
  let fixture: ComponentFixture<DisplaysErrorsInStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaysErrorsInStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysErrorsInStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
