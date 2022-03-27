import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapColorRangeComponent } from './treemap-color-range.component';

describe('TreemapColorRangeComponent', () => {
  let component: TreemapColorRangeComponent;
  let fixture: ComponentFixture<TreemapColorRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreemapColorRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreemapColorRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
