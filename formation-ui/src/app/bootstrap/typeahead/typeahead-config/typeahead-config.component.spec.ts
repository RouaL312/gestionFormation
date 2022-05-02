import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadConfigComponent } from './typeahead-config.component';

describe('TypeaheadConfigComponent', () => {
  let component: TypeaheadConfigComponent;
  let fixture: ComponentFixture<TypeaheadConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeaheadConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
