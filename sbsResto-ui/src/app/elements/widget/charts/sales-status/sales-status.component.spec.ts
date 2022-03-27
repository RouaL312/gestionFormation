import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatusComponent } from './sales-status.component';

describe('SalesStatusComponent', () => {
  let component: SalesStatusComponent;
  let fixture: ComponentFixture<SalesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
