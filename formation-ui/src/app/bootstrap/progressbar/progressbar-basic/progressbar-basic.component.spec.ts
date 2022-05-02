import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarBasicComponent } from './progressbar-basic.component';

describe('ProgressbarBasicComponent', () => {
  let component: ProgressbarBasicComponent;
  let fixture: ComponentFixture<ProgressbarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
