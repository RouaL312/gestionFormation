import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarHeightComponent } from './progressbar-height.component';

describe('ProgressbarHeightComponent', () => {
  let component: ProgressbarHeightComponent;
  let fixture: ComponentFixture<ProgressbarHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
