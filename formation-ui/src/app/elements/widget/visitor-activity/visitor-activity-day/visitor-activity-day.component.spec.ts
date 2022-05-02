import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorActivityDayComponent } from './visitor-activity-day.component';

describe('VisitorActivityDayComponent', () => {
  let component: VisitorActivityDayComponent;
  let fixture: ComponentFixture<VisitorActivityDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorActivityDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorActivityDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
