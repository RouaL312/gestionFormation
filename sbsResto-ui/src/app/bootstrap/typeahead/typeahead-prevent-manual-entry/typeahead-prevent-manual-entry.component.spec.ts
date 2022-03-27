import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadPreventManualEntryComponent } from './typeahead-prevent-manual-entry.component';

describe('TypeaheadPreventManualEntryComponent', () => {
  let component: TypeaheadPreventManualEntryComponent;
  let fixture: ComponentFixture<TypeaheadPreventManualEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeaheadPreventManualEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadPreventManualEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
