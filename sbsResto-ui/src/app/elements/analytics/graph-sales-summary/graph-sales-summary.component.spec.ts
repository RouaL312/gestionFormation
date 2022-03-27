import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSalesSummaryComponent } from './graph-sales-summary.component';

describe('GraphSalesSummaryComponent', () => {
  let component: GraphSalesSummaryComponent;
  let fixture: ComponentFixture<GraphSalesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSalesSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSalesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
