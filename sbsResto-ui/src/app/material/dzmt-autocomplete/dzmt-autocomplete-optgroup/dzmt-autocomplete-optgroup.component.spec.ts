import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteOptgroupComponent } from './dzmt-autocomplete-optgroup.component';

describe('DzmtAutocompleteOptgroupComponent', () => {
  let component: DzmtAutocompleteOptgroupComponent;
  let fixture: ComponentFixture<DzmtAutocompleteOptgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtAutocompleteOptgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtAutocompleteOptgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
