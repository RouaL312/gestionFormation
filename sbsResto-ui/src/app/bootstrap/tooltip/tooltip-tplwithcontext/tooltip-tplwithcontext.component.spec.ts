import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipTplwithcontextComponent } from './tooltip-tplwithcontext.component';

describe('TooltipTplwithcontextComponent', () => {
  let component: TooltipTplwithcontextComponent;
  let fixture: ComponentFixture<TooltipTplwithcontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipTplwithcontextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipTplwithcontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
