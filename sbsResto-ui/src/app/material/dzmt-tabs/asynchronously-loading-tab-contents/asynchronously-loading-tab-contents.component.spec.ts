import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronouslyLoadingTabContentsComponent } from './asynchronously-loading-tab-contents.component';

describe('AsynchronouslyLoadingTabContentsComponent', () => {
  let component: AsynchronouslyLoadingTabContentsComponent;
  let fixture: ComponentFixture<AsynchronouslyLoadingTabContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronouslyLoadingTabContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronouslyLoadingTabContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
