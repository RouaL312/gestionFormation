import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedLineAreaComponent } from './mixed-line-area.component';

describe('MixedLineAreaComponent', () => {
  let component: MixedLineAreaComponent;
  let fixture: ComponentFixture<MixedLineAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedLineAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedLineAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
