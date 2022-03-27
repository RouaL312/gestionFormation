import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithDynamicHeightComponent } from './tabs-with-dynamic-height.component';

describe('TabsWithDynamicHeightComponent', () => {
  let component: TabsWithDynamicHeightComponent;
  let fixture: ComponentFixture<TabsWithDynamicHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsWithDynamicHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsWithDynamicHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
