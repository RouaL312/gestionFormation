import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent } from './table-flex-with-toggle-able-sticky-headers-footers-columns.component';

describe('TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent', () => {
  let component: TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent;
  let fixture: ComponentFixture<TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
