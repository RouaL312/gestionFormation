import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTriggerTextComponent } from './custom-trigger-text.component';

describe('CustomTriggerTextComponent', () => {
  let component: CustomTriggerTextComponent;
  let fixture: ComponentFixture<CustomTriggerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTriggerTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTriggerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
