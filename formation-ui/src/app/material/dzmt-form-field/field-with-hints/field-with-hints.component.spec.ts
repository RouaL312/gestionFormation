import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithHintsComponent } from './field-with-hints.component';

describe('FieldWithHintsComponent', () => {
  let component: FieldWithHintsComponent;
  let fixture: ComponentFixture<FieldWithHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldWithHintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldWithHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
