import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFromMenuComponent } from './dialog-from-menu.component';

describe('DialogFromMenuComponent', () => {
  let component: DialogFromMenuComponent;
  let fixture: ComponentFixture<DialogFromMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFromMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFromMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
