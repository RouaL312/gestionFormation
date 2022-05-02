import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarTexttypesComponent } from './progressbar-texttypes.component';

describe('ProgressbarTexttypesComponent', () => {
  let component: ProgressbarTexttypesComponent;
  let fixture: ComponentFixture<ProgressbarTexttypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarTexttypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarTexttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
