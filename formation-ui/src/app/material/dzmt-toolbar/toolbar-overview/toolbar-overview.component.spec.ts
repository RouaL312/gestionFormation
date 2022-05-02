import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarOverviewComponent } from './toolbar-overview.component';

describe('ToolbarOverviewComponent', () => {
  let component: ToolbarOverviewComponent;
  let fixture: ComponentFixture<ToolbarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
