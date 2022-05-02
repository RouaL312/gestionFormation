import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsWithPrefixesSuffixesComponent } from './inputs-with-prefixes-suffixes.component';

describe('InputsWithPrefixesSuffixesComponent', () => {
  let component: InputsWithPrefixesSuffixesComponent;
  let fixture: ComponentFixture<InputsWithPrefixesSuffixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsWithPrefixesSuffixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsWithPrefixesSuffixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
