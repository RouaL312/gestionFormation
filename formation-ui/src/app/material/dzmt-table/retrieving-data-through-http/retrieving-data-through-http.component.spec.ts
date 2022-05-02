import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievingDataThroughHttpComponent } from './retrieving-data-through-http.component';

describe('RetrievingDataThroughHttpComponent', () => {
  let component: RetrievingDataThroughHttpComponent;
  let fixture: ComponentFixture<RetrievingDataThroughHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievingDataThroughHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievingDataThroughHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
