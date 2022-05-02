import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosWithNgModelComponent } from './radios-with-ng-model.component';

describe('RadiosWithNgModelComponent', () => {
  let component: RadiosWithNgModelComponent;
  let fixture: ComponentFixture<RadiosWithNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiosWithNgModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiosWithNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
