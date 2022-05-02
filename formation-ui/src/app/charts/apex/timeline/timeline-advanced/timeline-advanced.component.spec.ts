import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAdvancedComponent } from './timeline-advanced.component';

describe('TimelineAdvancedComponent', () => {
  let component: TimelineAdvancedComponent;
  let fixture: ComponentFixture<TimelineAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
