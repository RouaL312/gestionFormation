import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMissingOrNullValuesComponent } from './area-missing-or-null-values.component';

describe('AreaMissingOrNullValuesComponent', () => {
  let component: AreaMissingOrNullValuesComponent;
  let fixture: ComponentFixture<AreaMissingOrNullValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaMissingOrNullValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaMissingOrNullValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
