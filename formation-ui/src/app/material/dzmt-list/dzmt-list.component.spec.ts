import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtListComponent } from './dzmt-list.component';

describe('DzmtListComponent', () => {
  let component: DzmtListComponent;
  let fixture: ComponentFixture<DzmtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
