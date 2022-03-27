import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableSortingPaginationFilteringComponent } from './data-table-sorting-pagination-filtering.component';

describe('DataTableSortingPaginationFilteringComponent', () => {
  let component: DataTableSortingPaginationFilteringComponent;
  let fixture: ComponentFixture<DataTableSortingPaginationFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableSortingPaginationFilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableSortingPaginationFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
