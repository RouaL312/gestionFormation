import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphRevenueComponent } from './graph-revenue.component';

describe('GraphRevenueComponent', () => {
  let component: GraphRevenueComponent;
  let fixture: ComponentFixture<GraphRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
