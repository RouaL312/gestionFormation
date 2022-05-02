import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInFormComponent } from './select-in-form.component';

describe('SelectInFormComponent', () => {
  let component: SelectInFormComponent;
  let fixture: ComponentFixture<SelectInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
