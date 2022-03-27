import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProducts2Component } from './top-products2.component';

describe('TopProducts2Component', () => {
  let component: TopProducts2Component;
  let fixture: ComponentFixture<TopProducts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopProducts2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProducts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
