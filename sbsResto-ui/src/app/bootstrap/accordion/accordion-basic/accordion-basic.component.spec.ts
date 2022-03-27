import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBasicComponent } from './accordion-basic.component';

describe('AccordionBasicComponent', () => {
  let component: AccordionBasicComponent;
  let fixture: ComponentFixture<AccordionBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
