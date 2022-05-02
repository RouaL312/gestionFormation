import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsBasicComponent } from './inputs-basic.component';

describe('InputsBasicComponent', () => {
  let component: InputsBasicComponent;
  let fixture: ComponentFixture<InputsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
