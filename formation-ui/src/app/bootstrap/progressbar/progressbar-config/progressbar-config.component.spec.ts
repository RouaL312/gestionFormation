import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarConfigComponent } from './progressbar-config.component';

describe('ProgressbarConfigComponent', () => {
  let component: ProgressbarConfigComponent;
  let fixture: ComponentFixture<ProgressbarConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
