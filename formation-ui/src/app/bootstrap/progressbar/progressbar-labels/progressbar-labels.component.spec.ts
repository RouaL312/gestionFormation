import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarLabelsComponent } from './progressbar-labels.component';

describe('ProgressbarLabelsComponent', () => {
  let component: ProgressbarLabelsComponent;
  let fixture: ComponentFixture<ProgressbarLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
