import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStackedComponent } from './modal-stacked.component';

describe('ModalStackedComponent', () => {
  let component: ModalStackedComponent;
  let fixture: ComponentFixture<ModalStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
