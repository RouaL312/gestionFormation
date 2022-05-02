import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipBasicComponent } from './tooltip-basic.component';

describe('TooltipBasicComponent', () => {
  let component: TooltipBasicComponent;
  let fixture: ComponentFixture<TooltipBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
