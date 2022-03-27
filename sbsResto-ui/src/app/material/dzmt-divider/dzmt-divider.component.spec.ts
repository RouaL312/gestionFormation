import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtDividerComponent } from './dzmt-divider.component';

describe('DzmtDividerComponent', () => {
  let component: DzmtDividerComponent;
  let fixture: ComponentFixture<DzmtDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
