import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtTabsComponent } from './dzmt-tabs.component';

describe('DzmtTabsComponent', () => {
  let component: DzmtTabsComponent;
  let fixture: ComponentFixture<DzmtTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
