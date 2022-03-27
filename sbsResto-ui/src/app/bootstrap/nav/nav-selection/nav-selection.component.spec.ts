import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSelectionComponent } from './nav-selection.component';

describe('NavSelectionComponent', () => {
  let component: NavSelectionComponent;
  let fixture: ComponentFixture<NavSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
