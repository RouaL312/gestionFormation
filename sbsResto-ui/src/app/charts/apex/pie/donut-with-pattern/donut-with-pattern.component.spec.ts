import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutWithPatternComponent } from './donut-with-pattern.component';

describe('DonutWithPatternComponent', () => {
  let component: DonutWithPatternComponent;
  let fixture: ComponentFixture<DonutWithPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutWithPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutWithPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
