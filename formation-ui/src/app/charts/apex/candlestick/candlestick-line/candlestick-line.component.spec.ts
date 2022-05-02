import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickLineComponent } from './candlestick-line.component';

describe('CandlestickLineComponent', () => {
  let component: CandlestickLineComponent;
  let fixture: ComponentFixture<CandlestickLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandlestickLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlestickLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
