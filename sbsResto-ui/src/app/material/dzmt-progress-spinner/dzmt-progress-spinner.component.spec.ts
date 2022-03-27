import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtProgressSpinnerComponent } from './dzmt-progress-spinner.component';

describe('DzmtProgressSpinnerComponent', () => {
  let component: DzmtProgressSpinnerComponent;
  let fixture: ComponentFixture<DzmtProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtProgressSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
