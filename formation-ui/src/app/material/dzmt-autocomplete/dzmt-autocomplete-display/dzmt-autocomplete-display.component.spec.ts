import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteDisplayComponent } from './dzmt-autocomplete-display.component';

describe('DzmtAutocompleteDisplayComponent', () => {
  let component: DzmtAutocompleteDisplayComponent;
  let fixture: ComponentFixture<DzmtAutocompleteDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtAutocompleteDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtAutocompleteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
