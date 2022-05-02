import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipTriggersComponent } from './tooltip-triggers.component';

describe('TooltipTriggersComponent', () => {
  let component: TooltipTriggersComponent;
  let fixture: ComponentFixture<TooltipTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipTriggersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
