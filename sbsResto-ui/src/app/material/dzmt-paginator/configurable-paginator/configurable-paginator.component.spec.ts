import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurablePaginatorComponent } from './configurable-paginator.component';

describe('ConfigurablePaginatorComponent', () => {
  let component: ConfigurablePaginatorComponent;
  let fixture: ComponentFixture<ConfigurablePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurablePaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
