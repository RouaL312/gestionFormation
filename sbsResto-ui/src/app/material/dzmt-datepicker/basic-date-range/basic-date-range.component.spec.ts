import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDateRangeComponent } from './basic-date-range.component';

describe('BasicDateRangeComponent', () => {
  let component: BasicDateRangeComponent;
  let fixture: ComponentFixture<BasicDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDateRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
