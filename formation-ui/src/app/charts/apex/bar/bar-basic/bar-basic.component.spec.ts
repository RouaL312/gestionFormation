import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBasicComponent } from './bar-basic.component';

describe('BarBasicComponent', () => {
  let component: BarBasicComponent;
  let fixture: ComponentFixture<BarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
