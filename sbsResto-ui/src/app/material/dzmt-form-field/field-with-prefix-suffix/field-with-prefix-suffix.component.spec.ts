import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithPrefixSuffixComponent } from './field-with-prefix-suffix.component';

describe('FieldWithPrefixSuffixComponent', () => {
  let component: FieldWithPrefixSuffixComponent;
  let fixture: ComponentFixture<FieldWithPrefixSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldWithPrefixSuffixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldWithPrefixSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
