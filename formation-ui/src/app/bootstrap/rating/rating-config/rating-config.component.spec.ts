import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingConfigComponent } from './rating-config.component';

describe('RatingConfigComponent', () => {
  let component: RatingConfigComponent;
  let fixture: ComponentFixture<RatingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
