import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsWithInputComponent } from './chips-with-input.component';

describe('ChipsWithInputComponent', () => {
  let component: ChipsWithInputComponent;
  let fixture: ComponentFixture<ChipsWithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsWithInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsWithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
