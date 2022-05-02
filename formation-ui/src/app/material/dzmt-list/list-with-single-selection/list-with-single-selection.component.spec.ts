import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSingleSelectionComponent } from './list-with-single-selection.component';

describe('ListWithSingleSelectionComponent', () => {
  let component: ListWithSingleSelectionComponent;
  let fixture: ComponentFixture<ListWithSingleSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithSingleSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithSingleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
