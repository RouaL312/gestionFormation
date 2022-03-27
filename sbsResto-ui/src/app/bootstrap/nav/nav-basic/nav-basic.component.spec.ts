import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBasicComponent } from './nav-basic.component';

describe('NavBasicComponent', () => {
  let component: NavBasicComponent;
  let fixture: ComponentFixture<NavBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
