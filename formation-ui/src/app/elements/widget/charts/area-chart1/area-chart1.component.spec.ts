import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart1Component } from './area-chart1.component';

describe('AreaChart1Component', () => {
  let component: AreaChart1Component;
  let fixture: ComponentFixture<AreaChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaChart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
