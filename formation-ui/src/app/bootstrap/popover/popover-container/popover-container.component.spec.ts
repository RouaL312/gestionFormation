import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContainerComponent } from './popover-container.component';

describe('PopoverContainerComponent', () => {
  let component: PopoverContainerComponent;
  let fixture: ComponentFixture<PopoverContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
