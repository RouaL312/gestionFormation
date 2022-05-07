import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormationsComponent } from './session-formations.component';

describe('SessionFormationsComponent', () => {
  let component: SessionFormationsComponent;
  let fixture: ComponentFixture<SessionFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
