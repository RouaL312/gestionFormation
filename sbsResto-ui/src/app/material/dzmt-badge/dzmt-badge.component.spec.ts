import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtBadgeComponent } from './dzmt-badge.component';

describe('DzmtBadgeComponent', () => {
  let component: DzmtBadgeComponent;
  let fixture: ComponentFixture<DzmtBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
