import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeterminateProgressBarComponent } from './indeterminate-progress-bar.component';

describe('IndeterminateProgressBarComponent', () => {
  let component: IndeterminateProgressBarComponent;
  let fixture: ComponentFixture<IndeterminateProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndeterminateProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeterminateProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
