import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDailyTargetIncomeComponent } from './graph-daily-target-income.component';

describe('GraphDailyTargetIncomeComponent', () => {
  let component: GraphDailyTargetIncomeComponent;
  let fixture: ComponentFixture<GraphDailyTargetIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDailyTargetIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDailyTargetIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
