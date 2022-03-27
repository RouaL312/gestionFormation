import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarComponent } from './radialbar.component';

describe('RadialbarComponent', () => {
  let component: RadialbarComponent;
  let fixture: ComponentFixture<RadialbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
