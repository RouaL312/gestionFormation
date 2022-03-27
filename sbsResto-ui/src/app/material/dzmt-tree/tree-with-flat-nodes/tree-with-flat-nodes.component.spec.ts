import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWithFlatNodesComponent } from './tree-with-flat-nodes.component';

describe('TreeWithFlatNodesComponent', () => {
  let component: TreeWithFlatNodesComponent;
  let fixture: ComponentFixture<TreeWithFlatNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeWithFlatNodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeWithFlatNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
