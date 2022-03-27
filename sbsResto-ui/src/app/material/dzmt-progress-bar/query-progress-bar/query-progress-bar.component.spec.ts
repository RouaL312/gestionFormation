import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryProgressBarComponent } from './query-progress-bar.component';

describe('QueryProgressBarComponent', () => {
  let component: QueryProgressBarComponent;
  let fixture: ComponentFixture<QueryProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
