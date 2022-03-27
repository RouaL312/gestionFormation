import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionStaticComponent } from './accordion-static.component';

describe('AccordionStaticComponent', () => {
  let component: AccordionStaticComponent;
  let fixture: ComponentFixture<AccordionStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
