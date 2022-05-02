import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBasicComponent } from './dropdown-basic.component';

describe('DropdownBasicComponent', () => {
  let component: DropdownBasicComponent;
  let fixture: ComponentFixture<DropdownBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
