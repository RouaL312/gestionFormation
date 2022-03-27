import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiDonutComponent } from './semi-donut.component';

describe('SemiDonutComponent', () => {
  let component: SemiDonutComponent;
  let fixture: ComponentFixture<SemiDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiDonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
