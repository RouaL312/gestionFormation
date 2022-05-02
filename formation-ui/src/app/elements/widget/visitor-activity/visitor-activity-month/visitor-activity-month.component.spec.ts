import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorActivityMonthComponent } from './visitor-activity-month.component';

describe('VisitorActivityMonthComponent', () => {
  let component: VisitorActivityMonthComponent;
  let fixture: ComponentFixture<VisitorActivityMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorActivityMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorActivityMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
