import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsInFormComponent } from './inputs-in-form.component';

describe('InputsInFormComponent', () => {
  let component: InputsInFormComponent;
  let fixture: ComponentFixture<InputsInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsInFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
