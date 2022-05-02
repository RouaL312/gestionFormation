import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGroupsComponent } from './option-groups.component';

describe('OptionGroupsComponent', () => {
  let component: OptionGroupsComponent;
  let fixture: ComponentFixture<OptionGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
