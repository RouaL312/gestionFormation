import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPositioningComponent } from './menu-positioning.component';

describe('MenuPositioningComponent', () => {
  let component: MenuPositioningComponent;
  let fixture: ComponentFixture<MenuPositioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPositioningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
