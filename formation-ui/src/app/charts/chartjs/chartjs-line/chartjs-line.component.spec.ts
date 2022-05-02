import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsLineComponent } from './chartjs-line.component';

describe('ChartjsLineComponent', () => {
  let component: ChartjsLineComponent;
  let fixture: ComponentFixture<ChartjsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
