import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortableComponent } from './table-sortable.component';

describe('TableSortableComponent', () => {
  let component: TableSortableComponent;
  let fixture: ComponentFixture<TableSortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSortableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
