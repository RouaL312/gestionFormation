import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselConfigComponent } from './carousel-config.component';

describe('CarouselConfigComponent', () => {
  let component: CarouselConfigComponent;
  let fixture: ComponentFixture<CarouselConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
