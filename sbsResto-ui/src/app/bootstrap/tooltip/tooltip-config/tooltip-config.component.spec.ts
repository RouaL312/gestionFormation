import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipConfigComponent } from './tooltip-config.component';

describe('TooltipConfigComponent', () => {
  let component: TooltipConfigComponent;
  let fixture: ComponentFixture<TooltipConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
