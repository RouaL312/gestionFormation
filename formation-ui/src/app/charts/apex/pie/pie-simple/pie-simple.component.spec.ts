import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieSimpleComponent } from './pie-simple.component';

describe('PieSimpleComponent', () => {
  let component: PieSimpleComponent;
  let fixture: ComponentFixture<PieSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
