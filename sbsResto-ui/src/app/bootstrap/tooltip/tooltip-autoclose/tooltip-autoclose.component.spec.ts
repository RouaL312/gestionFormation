import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipAutocloseComponent } from './tooltip-autoclose.component';

describe('TooltipAutocloseComponent', () => {
  let component: TooltipAutocloseComponent;
  let fixture: ComponentFixture<TooltipAutocloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipAutocloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipAutocloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
