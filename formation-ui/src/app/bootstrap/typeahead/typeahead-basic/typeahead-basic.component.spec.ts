import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadBasicComponent } from './typeahead-basic.component';

describe('TypeaheadBasicComponent', () => {
  let component: TypeaheadBasicComponent;
  let fixture: ComponentFixture<TypeaheadBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeaheadBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
