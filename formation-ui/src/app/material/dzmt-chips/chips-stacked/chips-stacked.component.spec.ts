import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsStackedComponent } from './chips-stacked.component';

describe('ChipsStackedComponent', () => {
  let component: ChipsStackedComponent;
  let fixture: ComponentFixture<ChipsStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsStackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
