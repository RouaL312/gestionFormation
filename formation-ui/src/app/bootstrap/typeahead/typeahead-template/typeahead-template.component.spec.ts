import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadTemplateComponent } from './typeahead-template.component';

describe('TypeaheadTemplateComponent', () => {
  let component: TypeaheadTemplateComponent;
  let fixture: ComponentFixture<TypeaheadTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeaheadTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
