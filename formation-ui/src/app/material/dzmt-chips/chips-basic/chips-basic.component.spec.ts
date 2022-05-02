import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsBasicComponent } from './chips-basic.component';

describe('ChipsBasicComponent', () => {
  let component: ChipsBasicComponent;
  let fixture: ComponentFixture<ChipsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
