import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionConfigComponent } from './accordion-config.component';

describe('AccordionConfigComponent', () => {
  let component: AccordionConfigComponent;
  let fixture: ComponentFixture<AccordionConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
