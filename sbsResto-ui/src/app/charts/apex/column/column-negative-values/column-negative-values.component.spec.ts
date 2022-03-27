import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnNegativeValuesComponent } from './column-negative-values.component';

describe('ColumnNegativeValuesComponent', () => {
  let component: ColumnNegativeValuesComponent;
  let fixture: ComponentFixture<ColumnNegativeValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnNegativeValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnNegativeValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
