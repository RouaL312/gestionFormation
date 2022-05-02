import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipWithChangingMessageComponent } from './tooltip-with-changing-message.component';

describe('TooltipWithChangingMessageComponent', () => {
  let component: TooltipWithChangingMessageComponent;
  let fixture: ComponentFixture<TooltipWithChangingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipWithChangingMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipWithChangingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
