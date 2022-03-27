import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProducts1Component } from './top-products1.component';

describe('TopProducts1Component', () => {
  let component: TopProducts1Component;
  let fixture: ComponentFixture<TopProducts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopProducts1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProducts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
