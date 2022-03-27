import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsActiveUsersComponent } from './chartjs-active-users.component';

describe('ChartjsActiveUsersComponent', () => {
  let component: ChartjsActiveUsersComponent;
  let fixture: ComponentFixture<ChartjsActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsActiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
