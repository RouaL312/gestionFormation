import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncingChartsComponent } from './syncing-charts.component';

describe('SyncingChartsComponent', () => {
  let component: SyncingChartsComponent;
  let fixture: ComponentFixture<SyncingChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncingChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncingChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
