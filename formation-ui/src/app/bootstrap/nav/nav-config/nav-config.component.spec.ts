import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavConfigComponent } from './nav-config.component';

describe('NavConfigComponent', () => {
  let component: NavConfigComponent;
  let fixture: ComponentFixture<NavConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
