import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsWithHintsComponent } from './inputs-with-hints.component';

describe('InputsWithHintsComponent', () => {
  let component: InputsWithHintsComponent;
  let fixture: ComponentFixture<InputsWithHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsWithHintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsWithHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
