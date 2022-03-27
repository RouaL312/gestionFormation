import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithStretchedLabelsComponent } from './tabs-with-stretched-labels.component';

describe('TabsWithStretchedLabelsComponent', () => {
  let component: TabsWithStretchedLabelsComponent;
  let fixture: ComponentFixture<TabsWithStretchedLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsWithStretchedLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsWithStretchedLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
