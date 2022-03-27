import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverVisibilityComponent } from './popover-visibility.component';

describe('PopoverVisibilityComponent', () => {
  let component: PopoverVisibilityComponent;
  let fixture: ComponentFixture<PopoverVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverVisibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
