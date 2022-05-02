import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart6Component } from './bar-chart6.component';

describe('BarChart6Component', () => {
  let component: BarChart6Component;
  let fixture: ComponentFixture<BarChart6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChart6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
