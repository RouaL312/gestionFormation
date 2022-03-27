import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCustomerMapComponent } from './graph-customer-map.component';

describe('GraphCustomerMapComponent', () => {
  let component: GraphCustomerMapComponent;
  let fixture: ComponentFixture<GraphCustomerMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCustomerMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCustomerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
