import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart5Component } from './bar-chart5.component';

describe('BarChart5Component', () => {
  let component: BarChart5Component;
  let fixture: ComponentFixture<BarChart5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChart5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
