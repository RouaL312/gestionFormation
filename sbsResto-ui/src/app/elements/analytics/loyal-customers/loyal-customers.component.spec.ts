import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyalCustomersComponent } from './loyal-customers.component';

describe('LoyalCustomersComponent', () => {
  let component: LoyalCustomersComponent;
  let fixture: ComponentFixture<LoyalCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyalCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyalCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
