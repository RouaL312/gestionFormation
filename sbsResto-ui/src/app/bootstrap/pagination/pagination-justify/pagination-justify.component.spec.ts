import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationJustifyComponent } from './pagination-justify.component';

describe('PaginationJustifyComponent', () => {
  let component: PaginationJustifyComponent;
  let fixture: ComponentFixture<PaginationJustifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationJustifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationJustifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
