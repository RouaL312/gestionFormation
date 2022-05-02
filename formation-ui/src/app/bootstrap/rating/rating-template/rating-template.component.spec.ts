import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTemplateComponent } from './rating-template.component';

describe('RatingTemplateComponent', () => {
  let component: RatingTemplateComponent;
  let fixture: ComponentFixture<RatingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
