import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtSlideToggleComponent } from './dzmt-slide-toggle.component';

describe('DzmtSlideToggleComponent', () => {
  let component: DzmtSlideToggleComponent;
  let fixture: ComponentFixture<DzmtSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtSlideToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
