import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMarkupComponent } from './nav-markup.component';

describe('NavMarkupComponent', () => {
  let component: NavMarkupComponent;
  let fixture: ComponentFixture<NavMarkupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMarkupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
