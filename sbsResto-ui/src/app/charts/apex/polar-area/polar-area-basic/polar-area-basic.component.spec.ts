import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarAreaBasicComponent } from './polar-area-basic.component';

describe('PolarAreaBasicComponent', () => {
  let component: PolarAreaBasicComponent;
  let fixture: ComponentFixture<PolarAreaBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarAreaBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarAreaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
