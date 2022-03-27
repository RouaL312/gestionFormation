import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCompleteComponent } from './table-complete.component';

describe('TableCompleteComponent', () => {
  let component: TableCompleteComponent;
  let fixture: ComponentFixture<TableCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
