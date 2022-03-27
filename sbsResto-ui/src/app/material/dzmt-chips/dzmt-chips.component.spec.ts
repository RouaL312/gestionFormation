import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtChipsComponent } from './dzmt-chips.component';

describe('DzmtChipsComponent', () => {
  let component: DzmtChipsComponent;
  let fixture: ComponentFixture<DzmtChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
