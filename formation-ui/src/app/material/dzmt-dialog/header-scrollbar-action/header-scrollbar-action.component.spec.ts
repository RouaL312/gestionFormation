import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderScrollbarActionComponent } from './header-scrollbar-action.component';

describe('HeaderScrollbarActionComponent', () => {
  let component: HeaderScrollbarActionComponent;
  let fixture: ComponentFixture<HeaderScrollbarActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderScrollbarActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderScrollbarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
