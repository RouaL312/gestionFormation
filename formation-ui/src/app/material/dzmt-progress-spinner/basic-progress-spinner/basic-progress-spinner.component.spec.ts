import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProgressSpinnerComponent } from './basic-progress-spinner.component';

describe('BasicProgressSpinnerComponent', () => {
  let component: BasicProgressSpinnerComponent;
  let fixture: ComponentFixture<BasicProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicProgressSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
