import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChangeEventsComponent } from './input-change-events.component';

describe('InputChangeEventsComponent', () => {
  let component: InputChangeEventsComponent;
  let fixture: ComponentFixture<InputChangeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChangeEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChangeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
