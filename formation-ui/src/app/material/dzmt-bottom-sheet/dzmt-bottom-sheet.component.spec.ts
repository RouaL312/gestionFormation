import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtBottomSheetComponent } from './dzmt-bottom-sheet.component';

describe('DzmtBottomSheetComponent', () => {
  let component: DzmtBottomSheetComponent;
  let fixture: ComponentFixture<DzmtBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
