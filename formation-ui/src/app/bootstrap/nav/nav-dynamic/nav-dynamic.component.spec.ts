import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDynamicComponent } from './nav-dynamic.component';

describe('NavDynamicComponent', () => {
  let component: NavDynamicComponent;
  let fixture: ComponentFixture<NavDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
