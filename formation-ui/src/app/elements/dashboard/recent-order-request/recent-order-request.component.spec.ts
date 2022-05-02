import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOrderRequestComponent } from './recent-order-request.component';

describe('RecentOrderRequestComponent', () => {
  let component: RecentOrderRequestComponent;
  let fixture: ComponentFixture<RecentOrderRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentOrderRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentOrderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
