import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCloseableComponent } from './alert-closeable.component';

describe('AlertCloseableComponent', () => {
  let component: AlertCloseableComponent;
  let fixture: ComponentFixture<AlertCloseableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCloseableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCloseableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
