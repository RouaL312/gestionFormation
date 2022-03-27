import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCustomerMap1Component } from './graph-customer-map1.component';

describe('GraphCustomerMap1Component', () => {
  let component: GraphCustomerMap1Component;
  let fixture: ComponentFixture<GraphCustomerMap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCustomerMap1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCustomerMap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
