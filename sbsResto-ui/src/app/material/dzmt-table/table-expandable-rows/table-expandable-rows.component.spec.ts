import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpandableRowsComponent } from './table-expandable-rows.component';

describe('TableExpandableRowsComponent', () => {
  let component: TableExpandableRowsComponent;
  let fixture: ComponentFixture<TableExpandableRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableExpandableRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpandableRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
