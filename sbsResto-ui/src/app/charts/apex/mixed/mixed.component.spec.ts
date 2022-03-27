import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedComponent } from './mixed.component';

describe('MixedComponent', () => {
  let component: MixedComponent;
  let fixture: ComponentFixture<MixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
