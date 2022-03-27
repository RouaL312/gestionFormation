import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipWithShowHideDelayComponent } from './tooltip-with-show-hide-delay.component';

describe('TooltipWithShowHideDelayComponent', () => {
  let component: TooltipWithShowHideDelayComponent;
  let fixture: ComponentFixture<TooltipWithShowHideDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipWithShowHideDelayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipWithShowHideDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
