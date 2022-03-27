import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart3Component } from './bar-chart3.component';

describe('BarChart3Component', () => {
  let component: BarChart3Component;
  let fixture: ComponentFixture<BarChart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChart3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
