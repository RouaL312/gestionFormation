import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverCustomclassComponent } from './popover-customclass.component';

describe('PopoverCustomclassComponent', () => {
  let component: PopoverCustomclassComponent;
  let fixture: ComponentFixture<PopoverCustomclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverCustomclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverCustomclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
