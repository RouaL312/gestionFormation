import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosBasicComponent } from './radios-basic.component';

describe('RadiosBasicComponent', () => {
  let component: RadiosBasicComponent;
  let fixture: ComponentFixture<RadiosBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiosBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiosBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
