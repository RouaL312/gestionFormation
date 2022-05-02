import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipCustomclassComponent } from './tooltip-customclass.component';

describe('TooltipCustomclassComponent', () => {
  let component: TooltipCustomclassComponent;
  let fixture: ComponentFixture<TooltipCustomclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipCustomclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipCustomclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
