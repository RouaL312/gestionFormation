import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithDynamicallyChangingTabsComponent } from './tabs-with-dynamically-changing-tabs.component';

describe('TabsWithDynamicallyChangingTabsComponent', () => {
  let component: TabsWithDynamicallyChangingTabsComponent;
  let fixture: ComponentFixture<TabsWithDynamicallyChangingTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsWithDynamicallyChangingTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsWithDynamicallyChangingTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
