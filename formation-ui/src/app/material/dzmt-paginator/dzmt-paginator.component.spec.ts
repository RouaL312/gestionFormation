import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtPaginatorComponent } from './dzmt-paginator.component';

describe('DzmtPaginatorComponent', () => {
  let component: DzmtPaginatorComponent;
  let fixture: ComponentFixture<DzmtPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzmtPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzmtPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
