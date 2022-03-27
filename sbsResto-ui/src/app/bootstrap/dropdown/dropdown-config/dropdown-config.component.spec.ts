import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownConfigComponent } from './dropdown-config.component';

describe('DropdownConfigComponent', () => {
  let component: DropdownConfigComponent;
  let fixture: ComponentFixture<DropdownConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
