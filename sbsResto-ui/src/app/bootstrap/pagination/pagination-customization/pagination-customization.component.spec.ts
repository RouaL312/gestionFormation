import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCustomizationComponent } from './pagination-customization.component';

describe('PaginationCustomizationComponent', () => {
  let component: PaginationCustomizationComponent;
  let fixture: ComponentFixture<PaginationCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
