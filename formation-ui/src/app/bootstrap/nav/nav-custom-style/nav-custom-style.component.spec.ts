import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCustomStyleComponent } from './nav-custom-style.component';

describe('NavCustomStyleComponent', () => {
  let component: NavCustomStyleComponent;
  let fixture: ComponentFixture<NavCustomStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCustomStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCustomStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
