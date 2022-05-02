import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterDatetimeComponent } from './scatter-datetime.component';

describe('ScatterDatetimeComponent', () => {
  let component: ScatterDatetimeComponent;
  let fixture: ComponentFixture<ScatterDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterDatetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
