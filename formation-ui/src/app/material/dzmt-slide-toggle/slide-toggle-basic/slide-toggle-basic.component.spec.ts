import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleBasicComponent } from './slide-toggle-basic.component';

describe('SlideToggleBasicComponent', () => {
  let component: SlideToggleBasicComponent;
  let fixture: ComponentFixture<SlideToggleBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideToggleBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
