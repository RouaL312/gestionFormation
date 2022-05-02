import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtSnackBarComponent } from './dzmt-snack-bar.component';

describe('DzmtSnackBarComponent', () => {
  let component: DzmtSnackBarComponent;
  let fixture: ComponentFixture<DzmtSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
