import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableProgressSpinnerComponent } from './configurable-progress-spinner.component';

describe('ConfigurableProgressSpinnerComponent', () => {
  let component: ConfigurableProgressSpinnerComponent;
  let fixture: ComponentFixture<ConfigurableProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurableProgressSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
