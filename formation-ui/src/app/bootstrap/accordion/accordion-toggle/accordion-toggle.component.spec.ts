import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionToggleComponent } from './accordion-toggle.component';

describe('AccordionToggleComponent', () => {
  let component: AccordionToggleComponent;
  let fixture: ComponentFixture<AccordionToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
