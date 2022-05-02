import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTrendingMenusComponent } from './daily-trending-menus.component';

describe('DailyTrendingMenusComponent', () => {
  let component: DailyTrendingMenusComponent;
  let fixture: ComponentFixture<DailyTrendingMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTrendingMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTrendingMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
