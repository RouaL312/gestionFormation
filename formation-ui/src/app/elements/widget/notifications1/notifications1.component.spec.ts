import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notifications1Component } from './notifications1.component';

describe('Notifications1Component', () => {
  let component: Notifications1Component;
  let fixture: ComponentFixture<Notifications1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notifications1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Notifications1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
