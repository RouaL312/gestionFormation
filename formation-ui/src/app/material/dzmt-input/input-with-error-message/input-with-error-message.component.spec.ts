import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithErrorMessageComponent } from './input-with-error-message.component';

describe('InputWithErrorMessageComponent', () => {
  let component: InputWithErrorMessageComponent;
  let fixture: ComponentFixture<InputWithErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithErrorMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
