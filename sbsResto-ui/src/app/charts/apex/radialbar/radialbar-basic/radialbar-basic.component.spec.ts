import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarBasicComponent } from './radialbar-basic.component';

describe('RadialbarBasicComponent', () => {
  let component: RadialbarBasicComponent;
  let fixture: ComponentFixture<RadialbarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialbarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialbarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
