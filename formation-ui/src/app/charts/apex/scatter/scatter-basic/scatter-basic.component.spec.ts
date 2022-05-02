import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterBasicComponent } from './scatter-basic.component';

describe('ScatterBasicComponent', () => {
  let component: ScatterBasicComponent;
  let fixture: ComponentFixture<ScatterBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
