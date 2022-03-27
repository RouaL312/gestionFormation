import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapDistributedComponent } from './treemap-distributed.component';

describe('TreemapDistributedComponent', () => {
  let component: TreemapDistributedComponent;
  let fixture: ComponentFixture<TreemapDistributedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreemapDistributedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreemapDistributedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
