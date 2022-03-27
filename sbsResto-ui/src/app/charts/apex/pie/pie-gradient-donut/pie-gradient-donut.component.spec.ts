import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieGradientDonutComponent } from './pie-gradient-donut.component';

describe('PieGradientDonutComponent', () => {
  let component: PieGradientDonutComponent;
  let fixture: ComponentFixture<PieGradientDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieGradientDonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieGradientDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
