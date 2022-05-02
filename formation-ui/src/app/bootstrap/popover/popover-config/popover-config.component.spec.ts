import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverConfigComponent } from './popover-config.component';

describe('PopoverConfigComponent', () => {
  let component: PopoverConfigComponent;
  let fixture: ComponentFixture<PopoverConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
