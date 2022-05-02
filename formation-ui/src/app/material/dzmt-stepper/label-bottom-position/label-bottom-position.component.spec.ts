import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelBottomPositionComponent } from './label-bottom-position.component';

describe('LabelBottomPositionComponent', () => {
  let component: LabelBottomPositionComponent;
  let fixture: ComponentFixture<LabelBottomPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelBottomPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelBottomPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
