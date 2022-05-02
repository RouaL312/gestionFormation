import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDisabledComponent } from './pagination-disabled.component';

describe('PaginationDisabledComponent', () => {
  let component: PaginationDisabledComponent;
  let fixture: ComponentFixture<PaginationDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
