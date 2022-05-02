import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverAutocloseComponent } from './popover-autoclose.component';

describe('PopoverAutocloseComponent', () => {
  let component: PopoverAutocloseComponent;
  let fixture: ComponentFixture<PopoverAutocloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverAutocloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverAutocloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
