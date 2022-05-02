import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickBasicComponent } from './candlestick-basic.component';

describe('CandlestickBasicComponent', () => {
  let component: CandlestickBasicComponent;
  let fixture: ComponentFixture<CandlestickBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandlestickBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlestickBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
