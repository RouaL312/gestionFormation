import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsBarComponent } from './chartjs-bar.component';

describe('ChartjsBarComponent', () => {
  let component: ChartjsBarComponent;
  let fixture: ComponentFixture<ChartjsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
