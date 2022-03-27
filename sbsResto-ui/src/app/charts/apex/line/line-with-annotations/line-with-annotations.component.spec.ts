import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineWithAnnotationsComponent } from './line-with-annotations.component';

describe('LineWithAnnotationsComponent', () => {
  let component: LineWithAnnotationsComponent;
  let fixture: ComponentFixture<LineWithAnnotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineWithAnnotationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineWithAnnotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
