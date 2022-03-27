import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWithResetOptionComponent } from './select-with-reset-option.component';

describe('SelectWithResetOptionComponent', () => {
  let component: SelectWithResetOptionComponent;
  let fixture: ComponentFixture<SelectWithResetOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWithResetOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWithResetOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
