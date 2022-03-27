import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorStateMatcherComponent } from './custom-error-state-matcher.component';

describe('CustomErrorStateMatcherComponent', () => {
  let component: CustomErrorStateMatcherComponent;
  let fixture: ComponentFixture<CustomErrorStateMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomErrorStateMatcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomErrorStateMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
