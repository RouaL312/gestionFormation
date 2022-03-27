import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInReactiveFormComponent } from './select-in-reactive-form.component';

describe('SelectInReactiveFormComponent', () => {
  let component: SelectInReactiveFormComponent;
  let fixture: ComponentFixture<SelectInReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
