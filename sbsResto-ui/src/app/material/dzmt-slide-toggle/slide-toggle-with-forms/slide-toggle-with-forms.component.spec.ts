import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleWithFormsComponent } from './slide-toggle-with-forms.component';

describe('SlideToggleWithFormsComponent', () => {
  let component: SlideToggleWithFormsComponent;
  let fixture: ComponentFixture<SlideToggleWithFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideToggleWithFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleWithFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
