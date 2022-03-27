import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtIconComponent } from './dzmt-icon.component';

describe('DzmtIconComponent', () => {
  let component: DzmtIconComponent;
  let fixture: ComponentFixture<DzmtIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
