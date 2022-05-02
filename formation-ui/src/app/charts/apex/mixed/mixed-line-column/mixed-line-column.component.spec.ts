import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedLineColumnComponent } from './mixed-line-column.component';

describe('MixedLineColumnComponent', () => {
  let component: MixedLineColumnComponent;
  let fixture: ComponentFixture<MixedLineColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedLineColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedLineColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
