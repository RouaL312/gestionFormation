import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingEventsComponent } from './rating-events.component';

describe('RatingEventsComponent', () => {
  let component: RatingEventsComponent;
  let fixture: ComponentFixture<RatingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
