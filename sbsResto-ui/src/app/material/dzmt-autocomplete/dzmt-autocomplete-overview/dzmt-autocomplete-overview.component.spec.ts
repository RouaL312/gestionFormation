import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteOverviewComponent } from './dzmt-autocomplete-overview.component';

describe('DzmtAutocompleteOverviewComponent', () => {
  let component: DzmtAutocompleteOverviewComponent;
  let fixture: ComponentFixture<DzmtAutocompleteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtAutocompleteOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtAutocompleteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
