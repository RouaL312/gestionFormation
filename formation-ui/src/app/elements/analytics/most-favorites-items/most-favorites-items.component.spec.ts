import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFavoritesItemsComponent } from './most-favorites-items.component';

describe('MostFavoritesItemsComponent', () => {
  let component: MostFavoritesItemsComponent;
  let fixture: ComponentFixture<MostFavoritesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostFavoritesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostFavoritesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
