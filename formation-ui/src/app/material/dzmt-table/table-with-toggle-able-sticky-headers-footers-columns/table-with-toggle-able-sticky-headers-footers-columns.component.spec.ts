import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithToggleAbleStickyHeadersFootersColumnsComponent } from './table-with-toggle-able-sticky-headers-footers-columns.component';

describe('TableWithToggleAbleStickyHeadersFootersColumnsComponent', () => {
  let component: TableWithToggleAbleStickyHeadersFootersColumnsComponent;
  let fixture: ComponentFixture<TableWithToggleAbleStickyHeadersFootersColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithToggleAbleStickyHeadersFootersColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithToggleAbleStickyHeadersFootersColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
