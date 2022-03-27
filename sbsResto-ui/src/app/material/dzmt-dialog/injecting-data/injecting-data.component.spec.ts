import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectingDataComponent } from './injecting-data.component';

describe('InjectingDataComponent', () => {
  let component: InjectingDataComponent;
  let fixture: ComponentFixture<InjectingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
