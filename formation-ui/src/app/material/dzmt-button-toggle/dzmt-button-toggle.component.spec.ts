import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtButtonToggleComponent } from './dzmt-button-toggle.component';

describe('DzmtButtonToggleComponent', () => {
  let component: DzmtButtonToggleComponent;
  let fixture: ComponentFixture<DzmtButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtButtonToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
