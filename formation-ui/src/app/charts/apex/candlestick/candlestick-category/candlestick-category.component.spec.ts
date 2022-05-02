import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickCategoryComponent } from './candlestick-category.component';

describe('CandlestickCategoryComponent', () => {
  let component: CandlestickCategoryComponent;
  let fixture: ComponentFixture<CandlestickCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandlestickCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlestickCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
