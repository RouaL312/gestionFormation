import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorActivityYearComponent } from './visitor-activity-year.component';

describe('VisitorActivityYearComponent', () => {
  let component: VisitorActivityYearComponent;
  let fixture: ComponentFixture<VisitorActivityYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorActivityYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorActivityYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
