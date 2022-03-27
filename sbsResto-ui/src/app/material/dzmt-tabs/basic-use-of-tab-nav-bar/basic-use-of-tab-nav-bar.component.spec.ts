import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUseOfTabNavBarComponent } from './basic-use-of-tab-nav-bar.component';

describe('BasicUseOfTabNavBarComponent', () => {
  let component: BasicUseOfTabNavBarComponent;
  let fixture: ComponentFixture<BasicUseOfTabNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicUseOfTabNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUseOfTabNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
