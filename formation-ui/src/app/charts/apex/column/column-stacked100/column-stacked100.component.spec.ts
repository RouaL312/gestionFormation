import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnStacked100Component } from './column-stacked100.component';

describe('ColumnStacked100Component', () => {
  let component: ColumnStacked100Component;
  let fixture: ComponentFixture<ColumnStacked100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnStacked100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnStacked100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
