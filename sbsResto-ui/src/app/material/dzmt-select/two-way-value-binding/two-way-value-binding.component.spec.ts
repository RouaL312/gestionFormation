import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayValueBindingComponent } from './two-way-value-binding.component';

describe('TwoWayValueBindingComponent', () => {
  let component: TwoWayValueBindingComponent;
  let fixture: ComponentFixture<TwoWayValueBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayValueBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayValueBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
