import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWithPartiallyLoadedDataComponent } from './tree-with-partially-loaded-data.component';

describe('TreeWithPartiallyLoadedDataComponent', () => {
  let component: TreeWithPartiallyLoadedDataComponent;
  let fixture: ComponentFixture<TreeWithPartiallyLoadedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeWithPartiallyLoadedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeWithPartiallyLoadedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
