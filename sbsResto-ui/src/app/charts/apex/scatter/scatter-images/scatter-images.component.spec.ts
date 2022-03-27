import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterImagesComponent } from './scatter-images.component';

describe('ScatterImagesComponent', () => {
  let component: ScatterImagesComponent;
  let fixture: ComponentFixture<ScatterImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
