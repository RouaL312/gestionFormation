import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCustomersComponent } from './graph-customers.component';

describe('GraphCustomersComponent', () => {
  let component: GraphCustomersComponent;
  let fixture: ComponentFixture<GraphCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
