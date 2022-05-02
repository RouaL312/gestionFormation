import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCustomDataLabelsComponent } from './bar-custom-data-labels.component';

describe('BarCustomDataLabelsComponent', () => {
  let component: BarCustomDataLabelsComponent;
  let fixture: ComponentFixture<BarCustomDataLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCustomDataLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCustomDataLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
