import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTplwithcontextComponent } from './popover-tplwithcontext.component';

describe('PopoverTplwithcontextComponent', () => {
  let component: PopoverTplwithcontextComponent;
  let fixture: ComponentFixture<PopoverTplwithcontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverTplwithcontextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTplwithcontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
