import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithClearButtonComponent } from './input-with-clear-button.component';

describe('InputWithClearButtonComponent', () => {
  let component: InputWithClearButtonComponent;
  let fixture: ComponentFixture<InputWithClearButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithClearButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithClearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
