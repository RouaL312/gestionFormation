import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithDisplayFlexComponent } from './table-with-display-flex.component';

describe('TableWithDisplayFlexComponent', () => {
  let component: TableWithDisplayFlexComponent;
  let fixture: ComponentFixture<TableWithDisplayFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithDisplayFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithDisplayFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
