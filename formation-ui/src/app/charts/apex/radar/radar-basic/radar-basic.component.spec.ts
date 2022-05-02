import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarBasicComponent } from './radar-basic.component';

describe('RadarBasicComponent', () => {
  let component: RadarBasicComponent;
  let fixture: ComponentFixture<RadarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
