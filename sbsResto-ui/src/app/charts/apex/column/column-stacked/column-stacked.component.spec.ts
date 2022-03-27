import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnStackedComponent } from './column-stacked.component';

describe('ColumnStackedComponent', () => {
  let component: ColumnStackedComponent;
  let fixture: ComponentFixture<ColumnStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnStackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
