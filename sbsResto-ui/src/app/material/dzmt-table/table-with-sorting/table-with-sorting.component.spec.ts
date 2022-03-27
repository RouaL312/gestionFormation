import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSortingComponent } from './table-with-sorting.component';

describe('TableWithSortingComponent', () => {
  let component: TableWithSortingComponent;
  let fixture: ComponentFixture<TableWithSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
