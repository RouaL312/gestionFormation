import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingDecimalComponent } from './rating-decimal.component';

describe('RatingDecimalComponent', () => {
  let component: RatingDecimalComponent;
  let fixture: ComponentFixture<RatingDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingDecimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
