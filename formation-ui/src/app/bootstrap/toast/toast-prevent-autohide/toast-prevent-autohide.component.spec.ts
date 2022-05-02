import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastPreventAutohideComponent } from './toast-prevent-autohide.component';

describe('ToastPreventAutohideComponent', () => {
  let component: ToastPreventAutohideComponent;
  let fixture: ComponentFixture<ToastPreventAutohideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastPreventAutohideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastPreventAutohideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
