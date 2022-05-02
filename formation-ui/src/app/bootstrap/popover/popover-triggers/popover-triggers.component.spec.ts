import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTriggersComponent } from './popover-triggers.component';

describe('PopoverTriggersComponent', () => {
  let component: PopoverTriggersComponent;
  let fixture: ComponentFixture<PopoverTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverTriggersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
