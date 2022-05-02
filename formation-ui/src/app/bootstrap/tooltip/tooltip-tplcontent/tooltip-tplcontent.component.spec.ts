import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipTplcontentComponent } from './tooltip-tplcontent.component';

describe('TooltipTplcontentComponent', () => {
  let component: TooltipTplcontentComponent;
  let fixture: ComponentFixture<TooltipTplcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipTplcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipTplcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
