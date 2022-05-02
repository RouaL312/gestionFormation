import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtFormFieldComponent } from './dzmt-form-field.component';

describe('DzmtFormFieldComponent', () => {
  let component: DzmtFormFieldComponent;
  let fixture: ComponentFixture<DzmtFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
