import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtToolbarComponent } from './dzmt-toolbar.component';

describe('DzmtToolbarComponent', () => {
  let component: DzmtToolbarComponent;
  let fixture: ComponentFixture<DzmtToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
