import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtButtonComponent } from './dzmt-button.component';

describe('DzmtButtonComponent', () => {
  let component: DzmtButtonComponent;
  let fixture: ComponentFixture<DzmtButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
