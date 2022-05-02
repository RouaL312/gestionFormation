import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notifications2Component } from './notifications2.component';

describe('Notifications2Component', () => {
  let component: Notifications2Component;
  let fixture: ComponentFixture<Notifications2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notifications2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Notifications2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
