import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavKeepContentComponent } from './nav-keep-content.component';

describe('NavKeepContentComponent', () => {
  let component: NavKeepContentComponent;
  let fixture: ComponentFixture<NavKeepContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavKeepContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavKeepContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
