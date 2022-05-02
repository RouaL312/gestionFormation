import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverBasicComponent } from './popover-basic.component';

describe('PopoverBasicComponent', () => {
  let component: PopoverBasicComponent;
  let fixture: ComponentFixture<PopoverBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
