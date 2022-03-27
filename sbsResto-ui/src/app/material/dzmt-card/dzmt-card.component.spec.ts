import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtCardComponent } from './dzmt-card.component';

describe('DzmtCardComponent', () => {
  let component: DzmtCardComponent;
  let fixture: ComponentFixture<DzmtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
