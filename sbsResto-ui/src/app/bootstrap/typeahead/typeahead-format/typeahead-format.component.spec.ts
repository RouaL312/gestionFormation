import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadFormatComponent } from './typeahead-format.component';

describe('TypeaheadFormatComponent', () => {
  let component: TypeaheadFormatComponent;
  let fixture: ComponentFixture<TypeaheadFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeaheadFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
