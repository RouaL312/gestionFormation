import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPreventchangeComponent } from './accordion-preventchange.component';

describe('AccordionPreventchangeComponent', () => {
  let component: AccordionPreventchangeComponent;
  let fixture: ComponentFixture<AccordionPreventchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionPreventchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPreventchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
