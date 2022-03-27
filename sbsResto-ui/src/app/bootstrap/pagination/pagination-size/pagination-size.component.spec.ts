import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSizeComponent } from './pagination-size.component';

describe('PaginationSizeComponent', () => {
  let component: PaginationSizeComponent;
  let fixture: ComponentFixture<PaginationSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
