import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomCustomersComponent } from './ecom-customers.component';

describe('EcomCustomersComponent', () => {
  let component: EcomCustomersComponent;
  let fixture: ComponentFixture<EcomCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
