import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStacked100Component } from './bar-stacked100.component';

describe('BarStacked100Component', () => {
  let component: BarStacked100Component;
  let fixture: ComponentFixture<BarStacked100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarStacked100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStacked100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
