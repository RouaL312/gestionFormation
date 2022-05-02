import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtSortComponent } from './dzmt-sort.component';

describe('DzmtSortComponent', () => {
  let component: DzmtSortComponent;
  let fixture: ComponentFixture<DzmtSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
