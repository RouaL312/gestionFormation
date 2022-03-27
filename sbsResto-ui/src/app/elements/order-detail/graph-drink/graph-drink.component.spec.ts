import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDrinkComponent } from './graph-drink.component';

describe('GraphDrinkComponent', () => {
  let component: GraphDrinkComponent;
  let fixture: ComponentFixture<GraphDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
