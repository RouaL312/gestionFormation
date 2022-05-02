import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDistributedComponent } from './timeline-distributed.component';

describe('TimelineDistributedComponent', () => {
  let component: TimelineDistributedComponent;
  let fixture: ComponentFixture<TimelineDistributedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineDistributedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineDistributedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
