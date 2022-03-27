import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtTableComponent } from './dzmt-table.component';

describe('DzmtTableComponent', () => {
  let component: DzmtTableComponent;
  let fixture: ComponentFixture<DzmtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
