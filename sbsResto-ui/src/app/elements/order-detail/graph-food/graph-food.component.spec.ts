import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFoodComponent } from './graph-food.component';

describe('GraphFoodComponent', () => {
  let component: GraphFoodComponent;
  let fixture: ComponentFixture<GraphFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
