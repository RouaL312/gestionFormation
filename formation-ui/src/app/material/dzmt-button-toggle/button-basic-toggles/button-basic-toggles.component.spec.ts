import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBasicTogglesComponent } from './button-basic-toggles.component';

describe('ButtonBasicTogglesComponent', () => {
  let component: ButtonBasicTogglesComponent;
  let fixture: ComponentFixture<ButtonBasicTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBasicTogglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBasicTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
