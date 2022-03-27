import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorStateMatcherComponent } from './input-error-state-matcher.component';

describe('InputErrorStateMatcherComponent', () => {
  let component: InputErrorStateMatcherComponent;
  let fixture: ComponentFixture<InputErrorStateMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputErrorStateMatcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorStateMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
