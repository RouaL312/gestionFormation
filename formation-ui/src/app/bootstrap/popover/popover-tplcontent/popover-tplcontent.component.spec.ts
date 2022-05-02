import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTplcontentComponent } from './popover-tplcontent.component';

describe('PopoverTplcontentComponent', () => {
  let component: PopoverTplcontentComponent;
  let fixture: ComponentFixture<PopoverTplcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverTplcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTplcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
