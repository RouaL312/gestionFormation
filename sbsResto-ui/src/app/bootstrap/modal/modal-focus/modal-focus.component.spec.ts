import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFocusComponent } from './modal-focus.component';

describe('ModalFocusComponent', () => {
  let component: ModalFocusComponent;
  let fixture: ComponentFixture<ModalFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
