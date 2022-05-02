import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastCloseableComponent } from './toast-closeable.component';

describe('ToastCloseableComponent', () => {
  let component: ToastCloseableComponent;
  let fixture: ComponentFixture<ToastCloseableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastCloseableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastCloseableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
