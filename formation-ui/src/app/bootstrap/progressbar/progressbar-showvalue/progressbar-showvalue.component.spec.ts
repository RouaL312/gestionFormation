import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarShowvalueComponent } from './progressbar-showvalue.component';

describe('ProgressbarShowvalueComponent', () => {
  let component: ProgressbarShowvalueComponent;
  let fixture: ComponentFixture<ProgressbarShowvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarShowvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarShowvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
