import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtSidenavComponent } from './dzmt-sidenav.component';

describe('DzmtSidenavComponent', () => {
  let component: DzmtSidenavComponent;
  let fixture: ComponentFixture<DzmtSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
