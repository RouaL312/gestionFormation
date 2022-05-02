import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithThemeOptionsComponent } from './tabs-with-theme-options.component';

describe('TabsWithThemeOptionsComponent', () => {
  let component: TabsWithThemeOptionsComponent;
  let fixture: ComponentFixture<TabsWithThemeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsWithThemeOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsWithThemeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
