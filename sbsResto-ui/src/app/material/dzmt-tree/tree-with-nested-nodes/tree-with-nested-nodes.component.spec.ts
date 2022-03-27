import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWithNestedNodesComponent } from './tree-with-nested-nodes.component';

describe('TreeWithNestedNodesComponent', () => {
  let component: TreeWithNestedNodesComponent;
  let fixture: ComponentFixture<TreeWithNestedNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeWithNestedNodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeWithNestedNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
