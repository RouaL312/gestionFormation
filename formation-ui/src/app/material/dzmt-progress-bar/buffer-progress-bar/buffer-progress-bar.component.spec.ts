import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferProgressBarComponent } from './buffer-progress-bar.component';

describe('BufferProgressBarComponent', () => {
  let component: BufferProgressBarComponent;
  let fixture: ComponentFixture<BufferProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
