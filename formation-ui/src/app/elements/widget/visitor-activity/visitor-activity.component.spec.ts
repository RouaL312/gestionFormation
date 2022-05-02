import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorActivityComponent } from './visitor-activity.component';

describe('VisitorActivityComponent', () => {
  let component: VisitorActivityComponent;
  let fixture: ComponentFixture<VisitorActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
