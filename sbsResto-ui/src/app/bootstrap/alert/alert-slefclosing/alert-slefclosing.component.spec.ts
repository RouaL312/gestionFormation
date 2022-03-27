import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSlefclosingComponent } from './alert-slefclosing.component';

describe('AlertSlefclosingComponent', () => {
  let component: AlertSlefclosingComponent;
  let fixture: ComponentFixture<AlertSlefclosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSlefclosingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSlefclosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
