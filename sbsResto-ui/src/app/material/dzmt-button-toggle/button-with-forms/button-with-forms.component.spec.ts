import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithFormsComponent } from './button-with-forms.component';

describe('ButtonWithFormsComponent', () => {
  let component: ButtonWithFormsComponent;
  let fixture: ComponentFixture<ButtonWithFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWithFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
