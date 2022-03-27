import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphOrdersComponent } from './graph-orders.component';

describe('GraphOrdersComponent', () => {
  let component: GraphOrdersComponent;
  let fixture: ComponentFixture<GraphOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
